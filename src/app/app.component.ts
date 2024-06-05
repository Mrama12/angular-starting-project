import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { type Task, type NewTask } from './tasks/task/task.model';

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
  selectedId?: string;

  get selectedUser () {
    return this.users.find((user) => {
      return user.id === this.selectedId
    })
  }

  onSelectUser(id: string) {
    this.selectedId = id;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => {
      return id !== task.id;
    });
  }

  onAddTask(taskData: NewTask) {
    const addingTask: Task = {
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: this.selectedId,
      id: 't' + (this.tasks.length + 1),
    }
    this.tasks.unshift(addingTask);
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => {
      return task.userId === this.selectedUser?.id;
    })
  }
}
