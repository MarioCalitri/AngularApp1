import { Component, Input } from '@angular/core';
import { Driver } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
@Input() user: any; // or your Driver interface type
}