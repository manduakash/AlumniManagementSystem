import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from './Model/alert';
import { Notification } from './Model/notification';
import { Cookie } from "ng2-cookies/ng2-cookies";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  notifications: Notification [] = [];
  loginrole!: string;

  constructor(private redirect: Router){
    // Cookie.set('loginrole','');
  }

  ngOnInit(): void{
    this.loginrole = Cookie.get("loginrole");
  }

  alert: Alert = new Alert();
  isAlert: boolean = false;

  alertEmit(alert: Alert){
    this.alert = alert;
    this.isAlert = alert.isAlert
  }

  alertHomeEmit(alert: Alert){
    this.alert = alert;
    this.isAlert = alert.isAlert
  }

  notificationsEmit(notifications: Notification[]){
    this.notifications = notifications;
  }

  loginroleEmit(loginrole: string){
    Cookie.set("loginrole",loginrole)
    this.loginrole = loginrole;
  }
  roleEmit(loginrole: string){
    this.loginrole = loginrole;
  }


  logout(){
    this.alert.isAlert = true;
    this.alert.type = "success";
    this.alert.head = "Successfull";
    this.alert.message = "You have successfully logged out!";
    this.loginrole = "";
    Cookie.set('loginrole',this.loginrole);
    this.redirect.navigate(['homepage'], {
      queryParams: { data: btoa(JSON.stringify(this.alert)) }
    });
  }

  closeAlert(){
    this.isAlert = false
  }


  title = 'D-TechAlumniManagementSystem';


}
