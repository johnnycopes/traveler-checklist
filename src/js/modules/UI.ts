import { Helpers } from "./Helpers";

import { IApp } from "../interfaces/app.interface";
import { IUI } from "../interfaces/ui.interface";
import { ICounter } from "../interfaces/counter.interface";
import { ICategory } from "../interfaces/category.interface";
import { IListItem } from "../interfaces/list-item.interface";

export class UI implements IUI {
	private header: HTMLElement = <HTMLElement>document.querySelector('.header');
	private counterChecked: HTMLElement = <HTMLElement>document.querySelector('.counter__checked');
	private counterTotal: HTMLElement = <HTMLElement>document.querySelector('.counter__total');
	private categoriesList: HTMLElement = <HTMLElement>document.querySelector('.categories-list');
	private categoryNames: NodeListOf<HTMLElement>;
	private categoryDrawers: NodeListOf<HTMLElement>;
	private categoryLists: NodeListOf<HTMLElement>;

	constructor(private app: IApp) { }

	init(): void {
		this.createCategoriesList(this.app.categories);
		this.createListItems(this.app.listItems);
	}


	// COUNTER

	private updateCounter(counter: ICounter): void {
		this.counterChecked.innerText = counter.completed.toString();
		this.counterTotal.innerText = counter.total.toString();
	}


	// CATEGORIES

	private createCategoriesList(categories: ICategory[]): void {
		categories.forEach((category: ICategory) => {
			this.createCategoryAndAddToList(category);
			this.attachCategoryEventListeners(category);
		});

		// after category lists are created, register their DOM elements
		this.categoryNames = document.querySelectorAll('.category__name');
		this.categoryDrawers = document.querySelectorAll('.category__drawer');
		this.categoryLists = document.querySelectorAll('.category__list');

		// set category heights and attach global event listener for readjustment on viewport change
		this.setCategoryHeights();
		window.addEventListener('resize', this.setCategoryHeights);
	}

	private createCategoryAndAddToList(category: ICategory): void {
		let node: HTMLElement = document.createElement('li');
		const content: string = `
      <h3 class="category__name">
				<img class="category__icon"
					src="assets/${category.icon}.svg"
					alt="${category.icon}"
				/>
				<span class="category__name-wrapper">
					${category.name}
				</span>
				<img class="category__toggle-form-btn hide"
					src="assets/add.svg"
					alt="add"
				/>
      </h3>
      <div class="category__drawer category__triangle no-triangle">
        <form class="category__add-item-form category__add-item-form--hidden">
					<input class="category__add-item-input"
						type="text"
						placeholder="item name"
						required 
					/>
					<button class="category__add-item-btn"
						type="submit"
					>
						add
					</button>
        </form>
        <ul class="list category__list"></ul>
			</div>
		`;
		node.setAttribute('id', category.name);
		node.classList.add('category');
		node.innerHTML = content;

		// add category to list
		if (this.categoriesList) {
			this.categoriesList.appendChild(node);
		}
	}

	private attachCategoryEventListeners(category: ICategory): void {
		let name: HTMLElement = <HTMLElement>document.querySelector(`#${category.name} .category__name`);
		let drawer: HTMLElement = <HTMLElement>document.querySelector(`#${category.name} .category__drawer`);
		let list: HTMLElement = <HTMLElement>document.querySelector(`#${category.name} .category__list`);
		let toggleFormBtn: HTMLElement = <HTMLElement>document.querySelector(
			`#${category.name} .category__toggle-form-btn`
		);
		let addItemForm: HTMLElement = <HTMLElement>document.querySelector(
			`#${category.name} .category__add-item-form`
		);
		let addItemInput: HTMLInputElement = <HTMLInputElement>document.querySelector(
			`#${category.name} .category__add-item-input`
		);

		name.addEventListener('click', () => {
			toggleDrawer(drawer);
			addItemForm.classList.remove('category__add-item-form--hidden');
			name.classList.toggle('category__name--selected');
			drawer.classList.toggle('no-triangle');
			toggleFormBtn.classList.toggle('hide');
			addItemForm.classList.add('category__add-item-form--hidden');
			list.classList.remove('blur');
		});
		toggleFormBtn.addEventListener('click', (event) => {
			event.stopPropagation();
			addItemForm.classList.toggle('category__add-item-form--hidden');
			list.classList.toggle('blur');
			addItemInput.focus();
		});
		addItemForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const uniqueID: number = Math.floor(Math.random() * 1000); // TODO: replace with random number fn
			const item: IListItem = {
				uniqueID,
				name: addItemInput.value,
				category: category.name,
				completed: false
			};
			addItemInput.value = '';

			// update data and counter
			this.app.addListItem(item);
			this.updateCounter(this.app.counter);
		});

		function toggleDrawer(clickedDrawer: HTMLElement) {
			// save the open/close state of the clicked drawer before closing all drawers
			const drawerIsClosed: boolean = !!clickedDrawer.style.maxHeight;

			this.categoryDrawers.forEach((drawer: HTMLElement) => {
				drawer.style.maxHeight = null;
			});

			if (drawerIsClosed) {
				clickedDrawer.style.maxHeight = `${clickedDrawer.scrollHeight}px`;

				// scroll to clicked category
				setTimeout(function () {
					const name = clickedDrawer.previousElementSibling;
					if (name) {
						const namePosition = name.getBoundingClientRect().top - this.header.scrollHeight;
						window.scroll({
							top: namePosition,
							left: 0,
							behavior: 'smooth'
						});
					}
				}, 400);
			}
		}	
	}

	private setCategoryHeights(): void {
		const categoriesListHeight: number = window.innerHeight - this.header.scrollHeight;
		const categoryNameHeight: number = categoriesListHeight / this.categoryNames.length;

		this.categoryNames.forEach(name => {
			name.style.height = `${categoryNameHeight}px`;
		});

		this.categoryLists.forEach(list => {
			list.style.height = `${categoriesListHeight - categoryNameHeight}px`;
		});
	}


	// LIST ITEMS

	private createListItems(listItems: IListItem[]): void {
		listItems.forEach((listItem: IListItem) => {
			this.createListItemAndAddToList(listItem);
			this.attachListItemEventListeners(listItem);
		});
	}

	private createListItemAndAddToList(listItem: IListItem) {
		let node: HTMLElement = document.createElement('li');
		const checkedAttr = listItem.completed ? 'checked' : '';
		const content = `
			<input class="item__checkbox" 
				id="_${listItem.uniqueID}"
				type="checkbox" 
				${checkedAttr}
			/>
			<label class="item__name"
				for="_${listItem.uniqueID}"
			>
				<span>
					${listItem.name}
				</span>
				<img class="item__delete-btn"
					src="assets/delete.svg"
					alt="Delete button"
				/>
      </label>
    `;
		node.classList.add('item');
		node.innerHTML = content;

		// add list item to the top of the appropriate category list
		const categoryListElement: HTMLElement = <HTMLElement>document.querySelector(`#${listItem.category} .category__list`);
		categoryListElement.insertBefore(node, categoryListElement.firstChild);
	}

	private attachListItemEventListeners(listItem: IListItem) {
		const listItemElement: HTMLElement = <HTMLElement>document.querySelector(`#_${listItem.uniqueID}`);
		const listItemDeleteBtn: HTMLElement = <HTMLElement>document.querySelector(`#${listItem.category} .item__delete-btn`);

		listItemElement.addEventListener('change', () => {
			// update data and counter
			this.app.toggleListItemComplete(listItem);
			this.updateCounter(this.app.counter);
		});
		
		listItemDeleteBtn.addEventListener('click', () => {
			if (listItemElement && listItemElement.parentNode) {
				listItemElement.parentNode.removeChild(listItemElement);
				// update data and counter
				this.app.deleteListItem(listItem);
				this.updateCounter(this.app.counter);
			}
		});
	}
}
