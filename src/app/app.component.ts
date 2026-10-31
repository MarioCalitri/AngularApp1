import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Driver} from './models/user.model';
import { UserCardComponent } from './component/user-card/user-card.component';
import { UserStatusComponent } from './component/user-status/user-status.component';
import { UserBioComponent } from './component/user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserCardComponent, UserStatusComponent, UserBioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp1';

  currentUser: Driver = {
    name: 'Mario Calitri',
    carNumber: 78,
    division: 'Pure Stock',
    homeTrack: 'Flamboro Speedway',
    avatarUrl: 'PS78.jpeg',
    bio: 'For Mario, winning races starts hours before engine start. Driving the black #78 car in the 2027 Pure Stock division at Flamboro Speedway, Mario focuses on the fine details that separate contenders from the rest of the field—obsessing over chassis geometry, tire heat cycles, and race-craft setup changes. As a driver and software developer student, he runs CAL-TECH Motorsports with an engineering mindset, using his self-built Crew Chief software to squeeze every ounce of grip out of the track.',
    isRacing: true
  };

  handleStatusChange(newStatus: boolean) {
    this.currentUser.isRacing = newStatus;
  }

  handleBioUpdate(newBio: string) {
    this.currentUser.bio = newBio;
  }
}