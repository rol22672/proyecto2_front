import {  OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();

  ngOnInit(): void {
      
  }

  constructor(){
    this.isExpanded=true;
  }

  public routeLinks = [
    { link: "", name: "Login", icon: "login" },
    { link: "register", name: "Register", icon: "app_registration" },
    { link: "waiter/tables", name: "Tables", icon: "table_bar" },
    { link: "waiter/kitchen", name: "Kitchen", icon: "kitchen" },
    { link: "waiter/bar", name: "Bar", icon: "local_bar" },
  ];

}
