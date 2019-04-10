/**
 * Class: Todo
 * Variables:
 *      todo       -- todo text
 *      isComplete -- todo is/isn't complete
 *      date       -- todo date
 *      color      -- todo color tag
 * 
 * inspired by this tutorial:
 * https://www.sitepoint.com/angular-2-tutorial/ 
 */
export class Todo {
    todo: string = '';
    isComplete: boolean = false;
    date: Date;
    color: string = '';

    /**
     * Todo Constructor.
     * @param todo todo string text.
     * @param date todo date.
     */
    constructor(todo: string, date: Date) {
        this.todo = todo;
        this.date = date;
    }

    /**
     * Toggles whether or not a todo is complete.
     */
    toggleCompleted() {
        if (this.isComplete) this.isComplete = false;
        else this.isComplete = true;
    }

    /**
     * Returns whether or not a todo is complete.
     */
    isCompleted() {
        return this.isComplete;
    }

    /* Setters for todo, color, and date */
    setTodo(todo: string) {
        this.todo = todo;
    }

    setColor(color: string) {
        this.color = color;
    }

    setDate(date: Date) {
        this.date = date;
    }
}
