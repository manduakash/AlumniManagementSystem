import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { Notification } from 'src/app/Model/notification';
import { AlumniService } from 'src/app/Service/alumni.service';
import { NotificationService } from 'src/app/Service/notification.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  notifications: Notification[] = [];
  loginrole!: string;
  @Output() notificationsEmit = new EventEmitter<Notification[]>();
  @Output() loginroleEmit = new EventEmitter<string>();
  alroll!: number;
  alumnis!: Alumni[]
  alumni: Alumni = new Alumni();

  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
    this.alert.type = "";
    this.alert.head = "";
    this.alert.message = "";
    this.redirect.navigate(['homepage']);
  }

  constructor(private notificationService: NotificationService, private alumniService: AlumniService, private route: ActivatedRoute, private redirect: Router) {
    // this.redirect.routeReuseStrategy.shouldReuseRoute = ()=> false;
  }

  ngOnInit(): void {
    this.loginroleEmit.emit(this.loginrole);
    this.fetchNotifications();
    // fetching datas from url
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;

    });
  }

  // fetching notifications
  fetchNotifications(){
    this.notificationService.fetchNotifications().subscribe( data => {
      this.notifications = data;
      this.notificationsEmit.emit(this.notifications);
    })
  }

  getDetail(alroll: number){
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
  }

    //-------------------------------------------
  // get alumni by roll no.
  getAlumniByRoll(alroll: number){
    // redirecting to another link with roll no.
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
  }
  //-------------------------------------------

  //-------------------------------------------
  // get alumni by dname
  getAlmByDname(dname: string){
    // redirecting to another link with roll no.
    this.redirect.navigate(['department/get-alm-list-dname', dname]);
  }
  //-------------------------------------------

}
