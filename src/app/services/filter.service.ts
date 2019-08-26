import { TodoItem } from '../interfaces/todo-item';

const FILTERS = {
  ALL: (item: TodoItem, index: number, array: TodoItem[]) => true,
  COMPLETED: (item: TodoItem, index: number, array: TodoItem[]) => item.isChecked,
  UNCOMPLETED: (item: TodoItem, index: number, array: TodoItem[]) => !item.isChecked,
};

export class FilterService {

  filter = 'ALL';

  get activeFilter(): (item: TodoItem, index: number, array: TodoItem[]) => boolean {
    return FILTERS[this.filter];
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  get filters() {
    return Object.keys(FILTERS);
  }

}
