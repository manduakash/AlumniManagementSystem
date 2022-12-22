import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-create-alumni',
  templateUrl: './create-alumni.component.html',
  styleUrls: ['./create-alumni.component.css']
})
export class CreateAlumniComponent implements OnInit {

  alumni: Alumni = new Alumni();
  alert: Alert = new Alert();
  isAlert: boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private alumniService: AlumniService, private router: Router) { }

  ngOnInit(): void {
  }

  // creating alumni method using alumni service
  createAlumni(){
    this.alumniService.createAlumni(this.alumni).subscribe(
      data => {
      console.log(data);
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully created the alumni account!";
      // redirecting to alumni list with alert object
      this.router.navigate(['alumni/alm-get-alumnis'],
      {queryParams:{data: btoa(JSON.stringify(this.alert))}});
    },
    error => {
      console.log(error)
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Invalid Credentials";
      this.alert.message = "Roll number,email or phone number already taken, Please try different one!";
      this.isAlert = this.alert.isAlert;
    });
  }

  onSubmit(){
    console.log(this.alumni);
    this.createAlumni();
  }

}
