import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { Notification } from 'src/app/Model/notification';
import { AdminService } from 'src/app/Service/admin.service';
import { NotificationService } from 'src/app/Service/notification.service';
import { Cookie } from "ng2-cookies/ng2-cookies";
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  notification: Notification = new Notification();
  notifications: Notification[] = [];
  admin: Admin = new Admin();
  alumni: Alumni = new Alumni();
  alert: Alert = new Alert();
  alroll!: number;
  alumnis!: Alumni[];
  loginrole!: string;
  @Output() alertEmit = new EventEmitter<Alert>();
  @Output() notificationsEmit = new EventEmitter<Notification[]>();
  @Output() loginroleEmit = new EventEmitter<string>();
  @Input() role = this.loginrole;

  constructor(private adminService: AdminService, private alumniService: AlumniService, private notificationService: NotificationService, private redirect: Router) { }

  ngOnInit(): void {
    this.loginrole = Cookie.get("loginrole")
    this.notificationService.fetchNotifications().subscribe(data=>{
      this.notifications = data;
      this.notificationsEmit.emit(this.notifications);
      this.loginroleEmit.emit(this.loginrole);
    })
  }

  // for adding notification
  addNotification(){
    this.notificationService.addNotification(this.notification).subscribe(data=>{
      if(this.loginrole!="admin"){
        this.verifyingAdmin();
      };
      this.notification.heading = "";
      this.notification.description = "";
      console.log(data);
      this.notificationService.fetchNotifications().subscribe(data=>{
        this.notifications = data;
        this.notificationsEmit.emit(this.notifications);
      })
    },
    error=> {
      console.log(error);
    })

    this.adminService.verifyAdmin(this.admin.adusername, this.admin.adpassword).subscribe(data => {
      this.admin = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully added a notice!";
      this.alertEmit.emit(this.alert)
      this.loginrole = "admin"
      Cookie.set("loginrole",this.loginrole);
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid Credentials";
        this.alert.message = "Please enter valid admin credentials!";
        this.alertEmit.emit(this.alert);
        this.goToHome();
      });
  }


  goToHome() {
    this.redirect.navigate(['homepage'])
  }
  goToGetAlumnis() {
    this.redirect.navigate(['admin/get-alumnis'])
  }
  goToGetDepartments() {
    this.redirect.navigate(['admin/get-departments'])
  }
  goToUpdateAdmin() {
    this.redirect.navigate(['admin/get-departments'])
  }
  goToGetAlumniByRoll() {
    this.redirect.navigate(['admin/get-alumni-rollno'])
  }

  //-------------------------------------------
  // validation of admin
  verifyingAdmin() {
    this.adminService.verifyAdmin(this.admin.adusername, this.admin.adpassword).subscribe(data => {
      this.admin = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully logged in as a Admin!";
      this.alertEmit.emit(this.alert)
      this.loginrole = "admin"
      Cookie.set('loginrole','admin')
      this.loginroleEmit.emit(this.loginrole)
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid Credentials";
        this.alert.message = "Please enter valid username and password!";
        this.alertEmit.emit(this.alert);
        this.goToHome();
      });
  }

   // validation of alumni
   verifyingAlumni() {
    this.alumniService.verifyAlumni(this.alumni.alroll, this.alumni.alpassword).subscribe(data => {
      this.alumni = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully logged in as a Alumni!";
      this.alertEmit.emit(this.alert)
      this.loginrole = "alumni"
      Cookie.set('loginrole','alumni')
      this.loginroleEmit.emit(this.loginrole)
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid Credentials";
        this.alert.message = "Please enter valid username and password!";
        this.alertEmit.emit(this.alert);
        this.goToHome();
      });
  }

  //-------------------------------------------
  // for admin
  onGetAlumnisAdmin() {
    if(this.loginrole!="admin"){
      this.verifyingAdmin();
    }
    this.goToGetAlumnis();
  }
  //-------------------------------------------
  // for admin
  onGetDepartments() {
    if(this.loginrole!="admin"){
      this.verifyingAdmin();
    }
    this.goToGetDepartments();
  }
  //-------------------------------------------
  // for admin
  onUpdateAdmin() {
    if(this.loginrole!="admin"){
      this.verifyingAdmin();
    }
    this.goToGetAlumnis();
  }
  //-------------------------------------------
  // for admin
  onDeleteAdmin(username: string) {
    // verifying admin credentials
    if(this.loginrole!="admin"){
      this.verifyingAdmin();
    };
    this.adminService.deleteAdmin(username).subscribe(data => {
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivated the admin account!";
      // redirecting to homepage with alert object
      this.redirect.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    },
      error => {
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid credentials";
        this.alert.message = "Admin is not exist, Please enter valid username!";
        // redirecting to homepage with alert object
      this.redirect.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
    this.goToHome();
  }

  //-------------------------------------------
  // for alumni
  getAlumniByRoll(alroll: number) {
    if(this.loginrole!="alumni"){
      this.verifyingAlumni();
    }
    // redirecting to another link with roll no.
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
  }

  onGetAlumnis() {
    if(this.loginrole!="alumni"){
      this.verifyingAlumni();
    }
    // redirecting to another link
    this.redirect.navigate(['alumni/alm-get-alumnis']);
  }

  //-------------------------------------------
  // for department
  getAlmByDname(dname: string) {
    // redirecting to another link with roll no.
    this.redirect.navigate(['department/get-alm-list-dname', dname]);
  }

  //-------------------------------------------
  goToAlmUpdateAlumni() {
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', this.alroll]);
  }

  //-------------------------------------------

  // for admin
  getAlumniByRoll4Admin(alroll: number) {
    if(this.loginrole!="admin"){
      this.verifyingAdmin();
    };
    this.redirect.navigate(['admin/get-alumni-rollno', alroll], {
      queryParams: { data: btoa(JSON.stringify(this.alert)) }
    });
  }

  // for admin
  updateAlumniByRoll4Admin(alroll: number) {
    if(this.loginrole!="admin"){
      this.verifyingAdmin();
    };
    this.redirect.navigate(['admin/update-alumni', alroll], {
      queryParams: { data: btoa(JSON.stringify(this.alert)) }
    });
  }

  // for admin
  deleteAlumniByRoll4Admin(alroll: number) {
    // verifying admin credentials
    if(this.loginrole!="admin"){
      this.adminService.verifyAdmin(this.admin.adusername, this.admin.adpassword).subscribe(data => {
        this.admin = data;
        this.alert.isAlert = true;
        this.alert.type = "success";
        this.alert.head = "Successfull";
        this.alert.message = "You have successfully deleted the alumni!";
        this.redirect.navigate(['homepage'], {
          queryParams: { data: btoa(JSON.stringify(this.alert)) }
        });
      },
        error => {
          console.log(error)
          this.alert.isAlert = true;
          this.alert.type = "danger";
          this.alert.head = "Invalid Credentials";
          this.alert.message = "Please enter valid username and password!";
          this.alert.message = "You have successfully deleted the alumni!";
          this.redirect.navigate(['homepage'], {
            queryParams: { data: btoa(JSON.stringify(this.alert)) }
          })
        })
    };

    // verifying and deleting alumni
    this.adminService.deleteAlumni(alroll).subscribe(data => {
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deleted the alumni account!";
      this.alert.message = "You have successfully deleted the alumni!";
      this.redirect.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    }, error => {
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Invalid credentials";
      this.alert.message = "Alumni is not exist, Please enter valid roll number!";
      this.alert.message = "You have successfully deleted the alumni!";
      this.redirect.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    })
  }
}
