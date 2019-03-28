import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  today = new Date();
  todos = [];
  completedTodos = [];

  addTodo(todo: string) {
    // filter empty todos
    if (todo != '') {
      var newTodo = new Todo(todo);
      this.todos.push(newTodo);
    }
    console.log(this.todos);
  }

  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    console.log(this.todos);
  }

  deleteCompletedTodo(i: number) {
    this.completedTodos.splice(i, 1);
    console.log(this.completedTodos);
  }

  completeTodo(i: number) {
    this.todos[i].toggleCompleted();
    this.completedTodos.push(this.todos[i]);
    this.deleteTodo(i);
    console.log(this.todos);
  }

  uncompleteTodo(i: number) {
    this.completedTodos[i].toggleCompleted();
    this.todos.push(this.completedTodos[i]);
    this.deleteCompletedTodo(i);
    console.log(this.completedTodos);
  }

  checkIsCompleted(i: number) {
    if (this.todos.length == 0) return null;
    return this.todos[i].getIsCompleted();
  }

  setTodo(todo: string, i: number) {
    this.todos[i].setTodo(todo);
    console.log(this.todos);
  }

  completedTodosIsEmpty() {
    if (this.completedTodos.length == 0) return true;
    else return false;
  }

  toggleShowHide() {
    var x = document.getElementById("showHide");
    if (x.innerHTML === "Show") x.innerHTML = "Hide";
    else x.innerHTML = "Show";
  } 
}
