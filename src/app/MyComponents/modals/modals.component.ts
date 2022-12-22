import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  admin: Admin = new Admin();
  alumni: Alumni = new Alumni();
  alroll!: number;
  alumnis!: Alumni[];
  alert: Alert = new Alert();
  @Output() alertEmit = new EventEmitter<Alert>();

  constructor(private adminService: AdminService, private redirect: Router) { }

  ngOnInit(): void {
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
  onGetAlumnis() {
    this.verifyingAdmin();
    this.goToGetAlumnis();
  }
  //-------------------------------------------
  // for admin
  onGetDepartments() {
    this.verifyingAdmin();
    this.goToGetDepartments();
  }
  //-------------------------------------------
  // for admin
  onUpdateAdmin() {
    this.verifyingAdmin();
    this.goToGetAlumnis();
  }
  //-------------------------------------------
  // for admin
  onDeleteAdmin(username: string) {
    // verifying admin credentials
    this.adminService.verifyAdmin(this.admin.adusername, this.admin.adpassword).subscribe(data => {
      this.admin = data;
    },
      error => {
        console.log(error)
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid Credentials";
        this.alert.message = "Please enter valid username and password!";
        this.alertEmit.emit(this.alert)
        this.goToHome();
      });
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
  }

  //-------------------------------------------
  // for alumni
  getAlumniByRoll(alroll: number) {
    // redirecting to another link with roll no.
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
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
    this.verifyingAdmin();
    this.redirect.navigate(['admin/get-alumni-rollno', alroll], {
      queryParams: { data: btoa(JSON.stringify(this.alert)) }
    });
  }

  // for admin
  updateAlumniByRoll4Admin(alroll: number) {
    this.verifyingAdmin();
    this.redirect.navigate(['admin/update-alumni', alroll], {
      queryParams: { data: btoa(JSON.stringify(this.alert)) }
    });
  }

  // for admin
  deleteAlumniByRoll4Admin(alroll: number) {
    // this.verifyingAdmin();
    // verifying admin credentials
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
        });
      });

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
