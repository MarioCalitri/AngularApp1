import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent {
  @Input() isOnline: boolean = false;
  @Output() statusChanged = new EventEmitter<boolean>();

  toggleStatus() {
    this.isOnline = !this.isOnline;
    this.statusChanged.emit(this.isOnline);
  }
}