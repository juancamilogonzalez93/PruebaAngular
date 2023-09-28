import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: string[] = ['Hacer compras', 'Lavar el auto', 'Estudiar Angular'];
  newTask: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
