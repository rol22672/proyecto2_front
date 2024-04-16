import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  activeButton: 'login' | 'signup' = 'login';
  
  public token:string;
  public user:User;

  constructor(private restUser:RestUserService, private router:Router){
  }


  ngDoCheck(){
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
  }

  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
