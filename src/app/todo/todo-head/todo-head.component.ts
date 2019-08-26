import { TodoService } from '../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-head',
  templateUrl: './todo-head.component.html',
  styleUrls: ['./todo-head.component.scss']
})
export class TodoHeadComponent implements OnInit {

  form: FormGroup;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.form = new FormGroup({
      todoText: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.todoService.addTodo(this.form.value.todoText);
    this.form.patchValue({
      todoText: '',
    });
  }

}
