import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',

})
export class ToDoService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  /**
  * 回傳TODO清單
  */
  getTODOList() {
    let result = [];
    for (let index = 0; index < 5; index++) {
      result.push({
        id: index,
        todo: "todo" + (index + 1).toString()
      });
    }
    return result;
    return this.http.get(`${this.baseUrl}todo/list`);
  }
}
