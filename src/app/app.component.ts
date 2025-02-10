import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/guards/auth.service';
import { SessionBehaivorService } from './services/SessionBehaivorService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private sessionBehaivor: SessionBehaivorService) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.sessionBehaivor.setRefresh(false);
    } else {
      this.sessionBehaivor.setRefresh(true);
    }
  }

  title = 'casa-faro';
}
