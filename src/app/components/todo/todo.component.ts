import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: any[] = [];
  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      task: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required])
    });
  }

  submitTodo() {
    console.log('form', this.todoForm.value);
    this.todos.push(this.todoForm.value);

  }

}
