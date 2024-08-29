import { Injectable } from '@angular/core';
import { 
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private firestore: Firestore) { }

  getTodos(): Observable<Todo[]> {
    const todosRef = collection(this.firestore, 'todos');
    return collectionData(todosRef, {idField: 'id'});
  }

  createTodo(todo: Todo) : Promise<any> {
    const todosRef = collection(this.firestore, 'todos');
    return addDoc(todosRef, todo);
  }

  updateTodo(todo: Todo) : Promise<any> {
    const docRef = doc(this.firestore, `todos/${todo.id}`);
    return updateDoc(docRef, {title: todo.title, completed: todo.completed});
  }

  deleteTodo(todo: Todo) : Promise<any> {
    const docRef = doc(this.firestore, `todos/${todo.id}`);
    return deleteDoc(docRef);
  }
}
