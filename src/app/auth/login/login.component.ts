import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { OPTIONS } from '../../models/ConfigNotification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public user: any;
  constructor(private restUser:RestUserService, private notification:NotificationsService,private router:Router) { 
    this.user = new User(null,'','','','',null,'','',null,null);

  }

  ngOnInit(): void {
  }

  login(){
    this.restUser.login(this.user).subscribe((res:any)=>{
      if(res.user){
        this.notification.create("success",res.message,NotificationType.Success,  OPTIONS,"");
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigateByUrl("waiter/tables");
      }
    }, error =>{
      this.restUser.handleErrors(error);
    })
      
  }

}
