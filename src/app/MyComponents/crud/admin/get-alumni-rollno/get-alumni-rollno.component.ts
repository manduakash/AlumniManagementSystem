import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AdminService } from 'src/app/Service/admin.service';
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-get-alumni-rollno',
  templateUrl: './get-alumni-rollno.component.html',
  styleUrls: ['./get-alumni-rollno.component.css']
})
export class GetAlumniRollnoComponent implements OnInit {

  alumni: Alumni = new Alumni()
  alroll!: number;

  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private alumniService: AlumniService, private adminService: AdminService, private route: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {
    this.alroll = this.route.snapshot.params['alroll'];
    this.alumniService.getAlumniByRoll(this.alroll).subscribe( data => {
      console.log(data);
      this.alumni = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull"
      this.alert.message = "You have successfully fetched out the alumni!"
      this.isAlert = this.alert.isAlert;
    }, error => {
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Fetching Failure"
      this.alert.message = "No alumni found with this roll number!"
      this.redirect.navigate(['homepage'], {
        queryParams: {
          data: btoa(JSON.stringify(this.alert))
        }
      });

    });

    this.route.queryParams.subscribe( params =>{
      this.alert = JSON.parse(atob(params['data']))
      this.isAlert = this.alert.isAlert;
    })
  }

   // update alumni action method
   updateAlumni(alroll: number){
    this.redirect.navigate(['admin/update-alumni', alroll]);
  }

  // delete alumni action method
  deleteAlumni(alroll: number){
    this.adminService.deleteAlumni(alroll).subscribe( data => {
      console.log(data);
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull"
      this.alert.message = "You have successfully deleted the alumni!"
      this.redirect.navigate(['admin/get-alumnis'], {
        queryParams: {
          data: btoa(JSON.stringify(this.alert))
        }
      });

    }, error => {
      console.log(error);
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Alumni Deleting Failure"
      this.alert.message = "No alumni exist with this roll number in our database!"
      this.redirect.navigate(['admin/get-alumnis'], {
        queryParams: {
          data: btoa(JSON.stringify(this.alert))
        }
      });
    });
  }

}
