import { AutosizeDirective } from './directives/autosize.directive';
import { FilterService } from './services/filter.service';
import { LocalStorageService } from './services/local-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeadComponent } from './todo/todo-head/todo-head.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFiltersComponent } from './todo/todo-filters/todo-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeadComponent,
    TodoListComponent,
    CheckboxComponent,
    TodoItemComponent,
    TodoFiltersComponent,
    AutosizeDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    TodoService,
    LocalStorageService,
    FilterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
