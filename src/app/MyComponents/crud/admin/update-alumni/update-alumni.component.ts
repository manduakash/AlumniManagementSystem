import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { Department } from 'src/app/Model/department';
import { AdminService } from 'src/app/Service/admin.service';
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-update-alumni',
  templateUrl: './update-alumni.component.html',
  styleUrls: ['./update-alumni.component.css']
})
export class UpdateAlumniComponent implements OnInit {

  alumni: Alumni = new Alumni();
  dept!: Department;

  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  alroll!: number;
  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {
    this.alroll = this.activatedRoute.snapshot.params['alroll'];
    this.adminService.getAlumniByRoll(this.alroll).subscribe(data => {
      this.alumni = data;
      console.log(data);
    }, error => {
      console.log(error);
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Alumni Update Failure";
      this.alert.message = "You have entered incorrect roll number, No alumni Exists with this roll number!";
      // redirecting to alumni list with alert object
      this.redirect.navigate(['homepage'],
      {queryParams:{data: btoa(JSON.stringify(this.alert))}});
    });
  }

  onSubmit() {
    this.adminService.updateAlumni(this.alroll, this.alumni).subscribe(
      data => {
        console.log(data);
        this.alert.isAlert = true;
        this.alert.type = "success";
        this.alert.head = "Alumni Updated";
        this.alert.message = "You have successfully updated the alumni account!";
        // redirecting to alumni list with alert object
        this.redirect.navigate(['admin/get-alumnis'],
        {queryParams:{data: btoa(JSON.stringify(this.alert))}});

      }, error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Alumni Update Failure";
        this.alert.message = "You have successfully updated the alumni account!";
        this.isAlert = this.alert.isAlert;
      });
  }

}
