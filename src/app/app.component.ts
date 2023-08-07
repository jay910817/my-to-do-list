import { Component } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  todoList:any[] = [];

  constructor(public toDoService: ToDoService) {}
  ngOnInit(): void {
    this.todoList = this.toDoService.getTODOList();
    console.log("todo list:", this.todoList);
  }

  //紀錄最新id
  addId = 0;
  addTODOTitle = "";

  addTODO(){
    //輸入長度為0不新增
    if(this.addTODOTitle.length==0)return;

    //增加一筆代辦事項
    this.todoList.push({
      id:this.addId,
      todo:this.addTODOTitle
    });

    //流水號增加
    this.addId++;
    this.addTODOTitle = "";
  }

}
