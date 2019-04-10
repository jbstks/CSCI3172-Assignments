import { Component } from '@angular/core';
import { Todo } from './todo';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  today = new Date();
  todos = [];
  completedTodos = [];
  color = 6;
  colors = ["#FF3B30", "#FF9500", "#FFCC00", "#4CD964", "#007AFF", "#5856D6"]; // red, orange, yellow, green, blue, purple

  /**
   * Adds a TODO.
   * @param todo string of TODO.
   * @param date date of TODO.
   */
  addTodo(todo: string) {
    // filter empty todos
    if (todo != '') {
      var newTodo = new Todo(todo, this.today);
      this.todos.push(newTodo);
    }
    /* debug */
    console.log('Todos:\n');
    console.log(this.todos);
  }

  /**
   * Deletes a TODO from todos.
   * @param i TODO item number.
   */
  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    /* debug */
    console.log('Todos:\n');
    console.log(this.todos);
  }

  /**
   * Deletes a TODO from completedTodos.
   * @param i completed TODO item number
   */
  deleteCompletedTodo(i: number) {
    this.completedTodos.splice(i, 1);
    /* debug */
    console.log('Completed Todos:\n');
    console.log(this.completedTodos);
  }

  /**
   * Completes a TODO by toggling the completed boolean.
   * Adds it to completedTodos and removes it from todos.
   * @param i TODO item numbers.
   */
  completeTodo(i: number) {
    this.todos[i].toggleCompleted();
    this.completedTodos.push(this.todos[i]);
    this.deleteTodo(i);
    /* debug */
    console.log('Todos:\n');
    console.log(this.todos);
    console.log('Completed Todos:\n');
    console.log(this.completedTodos);
  }

  /**
   * Uncompletes a TODO by toggling the completed boolean.
   * Adds it to todos and removes it from completedTodos.
   * @param i completed TODO item number.
   */
  uncompleteTodo(i: number) {
    this.completedTodos[i].toggleCompleted();
    this.todos.push(this.completedTodos[i]);
    this.deleteCompletedTodo(i);
    /* debug */
    console.log('Todos:\n');
    console.log(this.todos);
    console.log('Completed Todos:\n');
    console.log(this.completedTodos);
  }

  /**
   * Checks if a TODO is completed.
   * @param i TODO item number.
   */
  checkIsCompleted(i: number) {
    if (this.todos.length == 0) return null;
    return this.todos[i].isCompleted();
  }

  /**
   * Sets the todo string of a given TODO.
   * @param todo string of TODO.
   * @param i TODO item number.
   */
  setTodo(todo: string, i: number) {
    if (this.todos.length == 0) return null;
    this.todos[i].setTodo(todo);
    /* debug */
    console.log('Todos:\n');
    console.log(this.todos);
  }

  /**
   * Checks if completedTodo is empty.
   */
  completedTodosIsEmpty() {
    if (this.completedTodos.length == 0) return true;
    else return false;
  }

  /**
   * Changes color tag of TODO.
   * @param i TODO item number.
   */
  changeColor(i: number) {
    this.color++;
    if (this.color >= this.colors.length) this.color = 0;
    this.todos[i].setColor(this.colors[this.color]);
    /* debug */
    console.log('This todo\'s color:' + this.todos[i].color);
  }

  /**
   * Toggles whether list of completed TODOs should be shown or not.
   */
  toggleShowHide() {
    var x = document.getElementById("showHide");
    if (x.innerHTML === "Show") x.innerHTML = "Hide";
    else x.innerHTML = "Show";
  }
}
