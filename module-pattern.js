'use strict';

class ToDoList {
    #tasks = new Set(); // Private field

    addTask(task) {
        this.#tasks.add(task);
    }

    removeTask(task) {
        this.#tasks.delete(task);
    }

    viewTasks() {   
        console.log(Array.from(this.#tasks));
    }
}

const toDoList = new ToDoList()

toDoList.addTask('Do Homework')
toDoList.addTask('Walk the dog')
toDoList.addTask('Water plants')

toDoList.viewTasks()

toDoList.removeTask('Walk the dog')

toDoList.viewTasks()