import { ICounter } from './counter.interface';
import { ICategory } from './category.interface';
import { IListItem } from './list-item.interface';

export interface IApp {
	counter: ICounter;
	categories: ICategory[];
	listItems: IListItem[];
	init(): void;
	addListItem(item: IListItem): void;
	deleteListItem(item: IListItem): void;
	toggleListItemComplete(item: IListItem): void;
}
