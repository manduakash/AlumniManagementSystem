import { Component, Input } from '@angular/core';
import { Alert } from './Model/alert';
import { Notification } from './Model/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  notifications: Notification [] = [];
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

  closeAlert(){
    this.isAlert = false
  }
  title = 'D-TechAlumniManagementSystem';


}
