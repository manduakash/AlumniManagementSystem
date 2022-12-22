import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-alm-get-alumnis',
  templateUrl: './alm-get-alumnis.component.html',
  styleUrls: ['./alm-get-alumnis.component.css']
})
export class AlmGetAlumnisComponent implements OnInit {

  alumnis: Alumni[] | undefined;
  alroll!: number;
  alumni: Alumni = new Alumni();

  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private alumniService: AlumniService, private route: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {
    // fetching all alumnis
    this.getAlumnis();

    // fetching datas from url
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;
    });
  }

  private getAlumnis(){
    this.alumniService.getAlumnis().subscribe( data => {
      this.alumnis = data;
    }, error => {
      console.log(error);
    }
    );
  }

  getDetail(alroll: number){
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
  }

}
