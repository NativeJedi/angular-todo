import { Component } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent {

  constructor(private todoService: TodoService) { }

  get todos() {
    return this.todoService.todos;
  }

}
