import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { AdminService } from 'src/app/Service/admin.service';
import { Alumni } from "../../../../Model/alumni";
@Component({
  selector: 'app-get-alumnis',
  templateUrl: './get-alumnis.component.html',
  styleUrls: ['./get-alumnis.component.css']
})
export class GetAlumnisComponent implements OnInit {

  alumnis!: Alumni[] ;
  alumni: Alumni = new Alumni();
  alroll!: number;
  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private adminService: AdminService, private redirect: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // calling method  for getting alumni list
    this.getAlumnis();

    // fetching datas from url
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;
    })

  }


   getAlumnis(){
    this.adminService.getAlumnis().subscribe( data => {
      this.alumnis = data;
    });
  }

  // view alumni detail action method
  getDetail(alroll: number){
    this.redirect.navigate(['admin/get-alumni-rollno', alroll]);
  }

  // update alumni action method
  updateAlumni(alroll: number){
    this.redirect.navigate(['admin/update-alumni', alroll]);
  }

  // delete alumni action method
  adDeleteAlumni(alroll: number){
    this.adminService.deleteAlumni(alroll).subscribe( data => {
      console.log(data);
      this.getAlumnis();
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Alumni Deleted";
      this.alert.message = "You have successfully deleted the alumni!";
      this.isAlert = this.alert.isAlert;
    }, error => {
      console.log(error)
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Unable to delete";
      this.alert.message = "Sorry there is some internal server problem, Please try again to delete!";
      this.isAlert = this.alert.isAlert;
    });
  }

}
