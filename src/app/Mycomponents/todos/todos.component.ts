import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!:Todo[];
  localItem;
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null)
    {
      this.todos=[]
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const ind =this.todos.indexOf(todo);
    this.todos.splice(ind,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
