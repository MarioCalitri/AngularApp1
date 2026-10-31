import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent {
  @Input() bio: string = '';
  @Output() bioUpdated = new EventEmitter<string>();

  isEditing: boolean = false;
  tempBio: string = '';

  startEdit() {
    this.tempBio = this.bio;
    this.isEditing = true;
  }

  saveBio() {
    this.bio = this.tempBio;
    this.bioUpdated.emit(this.bio);
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}