import { FilterService } from './../../services/filter.service';
import { TodoFilter } from './../../interfaces/todo-filter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent {

  constructor(private filterService: FilterService) {}

  filters: string[] = this.filterService.filters;

  setFilter(filter: string) {
    this.filterService.filter = filter;
  }

  isFilterActive(filter: string): boolean {
    return filter === this.filterService.filter;
  }

}
