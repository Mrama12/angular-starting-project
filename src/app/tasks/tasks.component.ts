import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userName!: string;
  @Input({required: true}) userId!: string;

  constructor(private tasksService: TasksService) {
  }

  isAddingTask = false;

  addNewTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onCloseForm() {
    this.isAddingTask = false;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}
