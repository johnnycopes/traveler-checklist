import { Helpers } from "./Helpers";

import { IApp } from './../interfaces/app.interface'
import { ICounter } from "./../interfaces/counter.interface";
import { ICategory } from "./../interfaces/category.interface";
import { IListItem } from "./../interfaces/list-item.interface";

import { CATEGORIES } from "./../data/categories.data";
import { LIST_ITEMS } from "./../data/list-items.data";

export class App implements IApp {
	public categories: ICategory[] = CATEGORIES;
	public listItems: IListItem[] = LIST_ITEMS;
	public counter: ICounter = {
		completed: 0,
		total: this.listItems.length
	}

	addListItem(listItem: IListItem) {
		this.listItems.unshift(listItem);
		this.updateCounter();
	}

	deleteListItem(listItem: IListItem) {
		const listItemIndex = this.listItems.findIndex(item => listItem === item);
		this.listItems.splice(listItemIndex, 1);
		this.updateCounter();
	}

	toggleListItemComplete(listItem: IListItem) {
		listItem.completed = !listItem.completed;
		this.updateCounter();
	}

	private updateCounter() {
		this.counter.completed = 0;
		this.listItems.forEach(item => {
			if (item.completed) {
				this.counter.completed++;
			}
		});
		this.counter.total = this.listItems.length;
	}
}
