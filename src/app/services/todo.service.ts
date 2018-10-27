import { Injectable } from '@angular/core';
import { Todo } from '../shared/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lastid = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastid;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    todo.done = !todo.done;
    return todo;
  }


}
