import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ToDoService } from './to-do.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.getList();
    this.todoList = this.toDoService.getTODOList();
    console.log("todo list:", this.todoList);
  }

  getList() {
    this.toDoService.getTODOList().subscribe(
    (data: any) => {
      //接收回傳值
      this.todoList = data;
    },
    (error: HttpErrorResponse) => {
      console.log('ERROR');
    });
    }

  //紀錄最新id
  addId = 0;
  addTODOTitle = '';

  addTODO(){
    //輸入長度為0不新增
    if(this.addTODOTitle.length == 0) return;

    this.toDoService.addTODO(this.addTODOTitle).subscribe(
    (data: any) => {
      //清空
      this.addTODOTitle = '';
      //重新取得TODO清單
      this.getList();
    },
    (error: HttpErrorResponse) => {
      console.log('ERROR');
    });


    //送出資料
    let data = {
      todoTitle: todoTitle
    };
    return this.http.post(`${this.baseUrl}todo/add`, data);

  }

  deleteTODO(index: number){
    //刪除清單中第index筆
    this.toDoService.deleteTODO(id).subscribe(
      (data: any) => {
      //重新取得TODO清單
      this.getList();
      },
      (error: HttpErrorResponse) => {
      console.log('ERROR');
      });
    return this.http.delete(`${this.baseUrl}todo/delete/${id}`);
  }

}
