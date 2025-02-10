import { Component, OnInit } from '@angular/core';
import { SessionBehaivorService } from './services/SessionBehaivorService';
import { AuthGuardService } from './services/guards/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authGuard: AuthGuardService,
    private sessionBehaivor: SessionBehaivorService) { }

  async ngOnInit(): Promise<void> {
    let isAuth = false;
    await this.authGuard.canActivate().then(function(){
      isAuth = true;
    }, function() {
      isAuth = false;
    });
    console.log("in appcomponent "+isAuth);
    this.sessionBehaivor.setRefresh(isAuth);
  }
  title = 'casa-faro';
}
