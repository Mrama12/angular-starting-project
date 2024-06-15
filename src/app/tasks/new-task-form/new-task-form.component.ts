import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})

export class NewTaskFormComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  constructor(private tasksService: TasksService) {
  }

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelTask() {
    this.closeForm.emit();
  }

  onSubmitNewTask() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }, this.userId);
    this.closeForm.emit();
  }
}
