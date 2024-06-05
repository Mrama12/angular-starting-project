import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})

export class NewTaskFormComponent {
  @Output() cancelTask = new EventEmitter<void>();

  onCancelTask() {
    this.cancelTask.emit();
  }

}
