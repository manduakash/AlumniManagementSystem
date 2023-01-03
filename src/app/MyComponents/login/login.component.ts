import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Admin } from 'src/app/Model/admin';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: Admin = new Admin();
  alumni: Alumni = new Alumni();
  alert: Alert = new Alert();
  isAlert:boolean = false;
  loginrole!: string;

  @Output() roleEmit = new EventEmitter<string>();

  closeAlert(){
    this.isAlert = false;
    this.alert.type = "";
    this.alert.head = "";
    this.alert.message = "";
    this.redirect.navigate(['login']);
  }

  constructor(private adminService: AdminService, private redirect: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loginrole = Cookie.get("loginrole");
    this.roleEmit.emit(this.loginrole);
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;
      // for auto alert closing
      setTimeout(() => {
        this.isAlert = false;
      }, 5000);
    });

  }

  // validation of admin
  loginAdmin() {
    this.adminService.loginAdmin(this.admin.adusername, this.admin.adpassword).subscribe(data => {
      this.admin = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully logged in as a Admin!";
      this.loginrole = "admin"
      Cookie.set('loginrole','admin')
      this.roleEmit.emit(Cookie.get('loginrole'));
       // redirecting to homepage with alert object
       this.redirect.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert))}
      });
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Invalid Credentials";
        this.alert.message = "Please enter valid username and password!";
        // redirecting to homepage with alert object
        this.redirect.navigate(['login'], {
         queryParams: { data: btoa(JSON.stringify(this.alert)) }
        });
      });
  }

}
