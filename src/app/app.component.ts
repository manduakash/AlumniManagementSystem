import { Component, Input } from '@angular/core';
import { Alert } from './Model/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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

  closeAlert(){
    this.isAlert = false
  }
  title = 'AlumniManagementSystem';
}
