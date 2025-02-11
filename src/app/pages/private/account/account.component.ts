import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/login/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account?: User;

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.account = JSON.parse(localStorage.getItem('session')!);
  }

}
