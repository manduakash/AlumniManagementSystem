import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from './Model/alert';
import { Notification } from './Model/notification';
import { Cookie } from "ng2-cookies/ng2-cookies";
import { NotificationService } from './Service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  notifications: Notification [] = [];
  loginrole!: string;

  constructor(private redirect: Router,private notificationService: NotificationService){
    // Cookie.set('loginrole','');
  }

  ngOnInit(): void{
    this.loginrole = Cookie.get("loginrole");
    this.notificationsEmit(this.notifications);
    this.alertEmit(this.alert);
    this.alertHomeEmit(this.alert);
    this.loginroleEmit(Cookie.get("loginrole"))
    this.roleEmit(Cookie.get("loginrole"))
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

  // fetching notifications
  fetchNotifications(){
    this.notificationService.fetchNotifications().subscribe( data => {
      this.notifications = data;
    })
  }

  loginroleEmit(loginrole: string){
    this.loginrole = Cookie.get("loginrole");
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
      queryParams: { data: btoa(JSON.stringify(this.alert)), data2: btoa(JSON.stringify(this.loginrole)) }
    });
  }

  closeAlert(){
    this.isAlert = false
  }


  title = 'D-TechAlumniManagementSystem';


}
