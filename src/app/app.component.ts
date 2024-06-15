import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { type Task, type NewTask } from './tasks/task/task.model';
import { TasksService } from './tasks/tasks.service';

import { DUMMY_USERS } from './dummy-users';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS;
  tasks: Task[] = DUMMY_TASKS;
  selectedId = '';

  constructor(private tasksService: TasksService) {
  }

  get selectedUser () {
    return this.users.find((user) => {
      return user.id === this.selectedId
    })
  }

  onSelectUser(id: string) {
    this.selectedId = id;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasksService.removeTask(id, this.tasks);
  }

  onAddTask(taskData: NewTask) {
    this.tasks = this.tasksService.addTask(taskData, this.tasks, this.selectedId);
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => {
      return task.userId === this.selectedUser?.id;
    })
  }
}
