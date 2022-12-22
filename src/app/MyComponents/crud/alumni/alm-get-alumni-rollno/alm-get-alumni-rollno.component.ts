import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-alm-get-alumni-rollno',
  templateUrl: './alm-get-alumni-rollno.component.html',
  styleUrls: ['./alm-get-alumni-rollno.component.css']
})
export class AlmGetAlumniRollnoComponent implements OnInit {

  alumni: Alumni = new Alumni()
  alroll!: number;
  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private alumniService: AlumniService, private route: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {
    this.alroll = this.route.snapshot.params['alroll'];
    this.alumniService.getAlumniByRoll(this.alroll).subscribe( data => {
      console.log(data);
      this.alumni = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "Alumni successfully fetched out!";
      this.isAlert = this.alert.isAlert;
    }, error => {
      console.log(error);
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Fetching Failure";
      this.alert.message = "Alumni is not exists, Please try correct roll number!";
      console.log(this.alert);
      // redirecting to alumni list with alert object
      this.redirect.navigate(['homepage'],
      {queryParams:{data: btoa(JSON.stringify(this.alert))}});
    });

  }
}
