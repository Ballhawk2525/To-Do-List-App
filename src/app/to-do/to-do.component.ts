import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
  tasks = tasks;

  constructor() { 
  }

  addTask(newTask) {
    tasks.push({task: newTask, completed: false});
  }

  // removeTask(index) {
  //   tasks.splice(index, 1)
  // }

  // removeCompletedTask() {
    
  // }
    
  ngOnInit() {
  }

}

interface Todo {
  task: string;
  completed: boolean;
}


