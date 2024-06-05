import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

interface Task {
  id: string,
  userId?: string,
  title: string,
  summary?: string,
  dueDate?: string,
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
  @Input() userTasks!: Task[] | undefined;

  // tasks: Task[] = [];

  addNewTask() {
    console.log('New task!');
    // this.tasks.push({
    //   id: 'task 1',
    //   title: 'new task ' + this.tasks.length,
    // });
  }
}
