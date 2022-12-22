import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin';
import { Alert } from 'src/app/Model/alert';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  admin: Admin = new Admin();
  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  // create admin method using admin service
  createAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(
      data => {
        this.alert.isAlert = true;
        this.alert.type = "success";
        this.alert.head = "Successfull";
        this.alert.message = "You have successfully created the admin account!";
        this.isAlert = this.alert.isAlert;
        // redirecting to alumni list with alert object
        this.router.navigate(['homepage'],
        {queryParams:{data: btoa(JSON.stringify(this.alert))}});
      },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid Credentials";
        this.alert.message = "Usename or Email already taken, Please try different one!";
        this.isAlert = this.alert.isAlert;
    });
  }

  onSubmit(){
    console.log(this.admin);
    this.createAdmin();
  }

}
