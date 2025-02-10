import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDao } from 'src/app/api/dao/LoginDao';
import { AuthService } from 'src/app/services/guards/auth.service';
import { SessionBehaivorService } from 'src/app/services/SessionBehaivorService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private loginDao: LoginDao,
    private sessionBehaivor: SessionBehaivorService) { }

  ngOnInit(): void {
    this.sessionBehaivor.getRefresh().subscribe((value: boolean) => {
      if(value){
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['dashboard']);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginDao.login(this.loginForm.controls['username'].value!,
        this.loginForm.controls['password'].value!).subscribe(
          result => {
            if (result.code == 200) {
              console.log(result.usuario);
              this.sessionBehaivor.setRefresh(true);
              localStorage.setItem('session', JSON.stringify(result.usuario));
              this.router.navigate(['/dashboard']);
            }
          }
        );
    }
  }

}
