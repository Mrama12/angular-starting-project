import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomUserIndex];

  // Signals:
  // selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectedUser() {
    const newRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[newRandomIndex];

    // Signals:
    // this.selectedUser.set(DUMMY_USERS[newRandomIndex]);
  }
}
