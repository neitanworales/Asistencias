import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDao } from 'src/app/api/dao/LoginDao';
import { AuthService } from 'src/app/services/guards/auth.service';

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
    private auth: AuthService) { }

  ngOnInit(): void {
    console.log("Se validará la sessión");
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  onSubmit() {
    console.log("llegó aquí");
    if (this.loginForm.valid) {
      console.log("llegó acá");
      this.loginDao.login(this.loginForm.controls['username'].value!,
        this.loginForm.controls['password'].value!).subscribe(
          result => {
            if (result.code == 200) {
              console.log(result.usuario);
              localStorage.setItem('session', JSON.stringify(result.usuario));
              this.router.navigate(['/dashboard']);
            }
          }
        );
    }
  }

}
