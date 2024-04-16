import {  DoCheck, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from '../../models/User';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, DoCheck {

  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();
  
  public token:string;
  public user:User;

  constructor(private restUser:RestUserService){
    this.isExpanded=true;
  }

  ngOnInit(): void {
      
  }


  ngDoCheck(){
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }


  public routeLinksLogged = [
    { link: "waiter/tables", name: "Tables", icon: "table_bar" },
    { link: "waiter/kitchen", name: "Kitchen", icon: "kitchen" },
    { link: "waiter/bar", name: "Bar", icon: "local_bar" },
    { link: "waiter/report1", name: "Report 1", icon: "summarize" },
    { link: "waiter/report2", name: "Report 2", icon: "summarize" },
    { link: "waiter/report4", name: "Report 4", icon: "summarize" },
    { link: "waiter/report5", name: "Report 5", icon: "summarize" },
    { link: "waiter/report6", name: "Report 6", icon: "summarize" },
  ];
  
  public routeLinks = [
    { link: "", name: "Login", icon: "login" },
    { link: "register", name: "Register", icon: "app_registration" },
  ];

}
