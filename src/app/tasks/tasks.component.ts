import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { type Task, type NewTask } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userName!: string;
  @Input() userTasks!: Task[];
  @Output() completeTask = new EventEmitter<string>();
  @Output() addTask = new EventEmitter<NewTask>();

  isAddingTask = false;

  addNewTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCompleteTask(id: string) {
    this.completeTask.emit(id);
  }

  onCancelTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.addTask.emit(taskData);
    this.isAddingTask = false;
  }
}
