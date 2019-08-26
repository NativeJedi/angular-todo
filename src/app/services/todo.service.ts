import { FilterService } from './filter.service';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

@Injectable()

export class TodoService {

  initialTodos: Array<TodoItem> = this.localStorageService.getItem('todos') || [];

  get todos() {
    return this.initialTodos.filter(this.filterService.activeFilter);
  }

  set todos(todos) {
    this.initialTodos = [...todos];
    this.localStorageService.setItem('todos', todos);
  }

  constructor(
    private localStorageService: LocalStorageService,
    private filterService: FilterService,
  ) {}

  addTodo(todoText: string) {
    this.todos = [...this.initialTodos, {
      id: generateId(),
      text: todoText,
      isChecked: false,
      isVisible: true,
    }];
  }

  checkTodo(id: string, isChecked: boolean) {
    this.todos = this.initialTodos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = isChecked;
      }

      return todo;
    });
  }

  editTodo(id: string, todoText: string) {
    this.todos = this.initialTodos.map((todo) => {
      if (todo.id === id) {
        todo.text = todoText;
      }

      return todo;
    });
  }

  deleteTodo(id: string) {
    this.todos = this.initialTodos.filter(todo => todo.id !== id);
  }

}
