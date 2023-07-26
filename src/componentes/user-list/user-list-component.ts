import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user-service';

@Component({
  standalone: true,
  selector: 'user-list',
  imports:[NgFor,AsyncPipe, RouterLink],
  templateUrl:'./user-list.html',
  styleUrls:['./user-list.css']
})
export class UserListComponent {
  userService = inject(UserService);
  users$ = this.userService.getUsers();
}
