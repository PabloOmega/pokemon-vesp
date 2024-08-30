import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TodosService, Todo } from '../../services/todos/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  form: FormGroup;
  todos: Todo[] = [];

  constructor(private todosService: TodosService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    })
  }

  addTodo(): void {
    if (this.form.invalid) return;
    this.todosService.createTodo(this.form.value)
      .then((todo) => {
        console.log(todo.id);
        this.todos.push(todo);
        this.form.reset();
      })
      .catch(error => console.log(error));
  }

  updateTodo(todo: Todo): void {
    if (this.form.invalid) return;
    const newTodo = { ...todo, ...this.form.value };
    this.todosService.updateTodo(newTodo)
      .then(() => {
        const index = this.todos.findIndex(t => t.id === todo.id);
        this.todos[index] = newTodo;
      })
      .catch(error => console.log(error));
  }

  deleteTodo(todo: Todo): void {
    this.todosService.deleteTodo(todo)
      .then(() => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      })
      .catch(error => console.log(error));
  }
}
