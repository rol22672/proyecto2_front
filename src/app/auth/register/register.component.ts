import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { User } from '../../models/User';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { OPTIONS } from '../../models/ConfigNotification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public newUser: any;
  constructor(private restUser:RestUserService, private notification:NotificationsService,private router:Router) { 
    this.newUser = new User(null,'','','','',null,'','',null,null);
  }

  ngOnInit(): void {
  }


  register(){
    this.restUser.register(this.newUser).subscribe((res:any)=>{
      if(res.user){
        this.notification.create("success",res.message,NotificationType.Success,  OPTIONS,"");
        this.router.navigateByUrl("");
      }
    }, error =>{
      this.restUser.handleErrors(error);
    })
      
  }

}
