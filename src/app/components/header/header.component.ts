import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDao } from 'src/app/api/dao/LoginDao';
import { User } from 'src/app/models/login/User';
import { SessionBehaivorService } from 'src/app/services/SessionBehaivorService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = false;
  usuario?: User;

  constructor(
    private loginDao: LoginDao,
    public router: Router,
    private sessionBehaivor: SessionBehaivorService,
    private cd: ChangeDetectorRef
   ) { }

  ngOnInit(): void {
    this.loadUser();
    this.sessionBehaivor.getRefresh().subscribe((value: boolean) => {
      this.authenticated = value;
      console.log("logged : "+value)
      console.log("this.authenticated : "+this.authenticated)
      this.cd.detectChanges();
    });
  }

  loadUser(){
    this.usuario = JSON.parse(localStorage.getItem('session')!);
    console.log("Usuario por header: "+this.usuario?.token);
  }

  logout() {
    console.log("Cerrar sesión");
    this.loginDao.logout().subscribe(
      result => {
        if (result.code == 200) {
          this.sessionBehaivor.setRefresh(false);
          localStorage.removeItem('session');
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
