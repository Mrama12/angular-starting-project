import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { type Task, type NewTask } from './tasks/task/task.model';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedId = '';

  get selectedUser () {
    return this.users.find((user) => {
      return user.id === this.selectedId
    })
  }

  onSelectUser(id: string) {
    this.selectedId = id;
  }
}
