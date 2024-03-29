
import { Component, EventEmitter, Input, Output , OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Input() i: number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("button is triggered")
  }

  onCheckClick(todo:Todo){
    this.todoToggle.emit(todo);
  }
}
