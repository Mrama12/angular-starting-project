import { Component, EventEmitter, Input, Output } from '@angular/core';

// type User = {
//   id: string,
//   name: string,
//   avatar: string,
// };

interface User {
  id: string,
  name: string,
  avatar: string,
};

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User; 
  @Output() selectAction = new EventEmitter<string>();
  
  // Modern signals (adding input & output)
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.selectAction.emit(this.user.id);
  }
}
