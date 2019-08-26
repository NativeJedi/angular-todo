import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoItem;
  @ViewChild('todoTextarea') textarea: ElementRef;

  isEdit: boolean;
  editText: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.editText = this.todo.text;
  }

  checkTodo(isChecked: boolean) {
    this.todoService.checkTodo(this.todo.id, isChecked);
  }

  handleEdit() {
    this.isEdit = true;
    setTimeout(() => this.textarea.nativeElement.focus(), 0);
  }

  editTodo() {
    if (!this.editText || this.editText === this.todo.text) {
      this.editText = this.todo.text;
    } else {
      this.todoService.editTodo(this.todo.id, this.editText);
    }

    this.isEdit = false;
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }

}
