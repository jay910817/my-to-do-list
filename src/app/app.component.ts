import { Component } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  todoList = [];

  constructor(public toDoService: ToDoService) {}
  ngOnInit(): void {
    this.todoList = this.toDoService.getTODOList();
    console.log('todo list:', this.todoList);
  }
}
