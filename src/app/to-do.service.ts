import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor() {}

  /**
   * 回傳TODO清單
   */
  getTODOList() {
    let result = [];
    for (let index = 0; index < 5; index++) {
      result.push({
        id: index,
        todo: 'todo' + (index + 1).toString(),
      });
    }
    return result;
  }
}
