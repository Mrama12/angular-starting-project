import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

interface Task {
  id: number,
  taskName: string,
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userName!: string;
  tasks: Task[] = [];

  addNewTask() {
    console.log('New task!');
    this.tasks.push({
      id: this.tasks.length,
      taskName: 'new task ' + this.tasks.length
    });
  }
}
