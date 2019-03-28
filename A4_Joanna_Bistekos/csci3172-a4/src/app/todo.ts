/* referenced this tutorial https://www.sitepoint.com/angular-2-tutorial/ */
/**
 * Class: Todo
 * Variables:
 *      todo       -- todo text
 *      isComplete -- todo is/isn't complete
 */
export class Todo {
    todo: string = '';
    isComplete: boolean = false;
  
    constructor(todo: string) {
        this.todo = todo;
    }

    isCompleted() {
        this.isComplete = true;
    }

    isNotCompleted() {
        this.isComplete = false;
    }

    toggleCompleted() {
        if (this.isComplete) this.isComplete = false;
        else this.isComplete = true;
    }

    getIsCompleted() {
        return this.isComplete;
    }

    setTodo(todo: string) {
        this.todo = todo;
    }
}
