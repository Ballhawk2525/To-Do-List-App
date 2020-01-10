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

  removeTask(searchTask) {
    let index = tasks.indexOf(searchTask);
    tasks.splice(index, 1);
  }

  taskCompleted(task) {
    task.completed = true
  }
    
  ngOnInit() {
  }

}

interface Todo {
  task: string;
  completed: boolean;
}


