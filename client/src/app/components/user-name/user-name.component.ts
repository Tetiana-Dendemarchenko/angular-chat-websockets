import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  @Output() userNameEvent = new EventEmitter<string>();

  userName = '';

  constructor() {
  }

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }

}
