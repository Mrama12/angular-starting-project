import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})

export class NewTaskFormComponent {
  @Output() cancelTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelTask() {
    this.cancelTask.emit();
  }

  onSubmitNewTask() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
