import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Alumni } from 'src/app/Model/alumni';
import { AlumniService } from 'src/app/Service/alumni.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  alroll!: number;
  alumnis!: Alumni[]
  alumni: Alumni = new Alumni();

  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private alumniService: AlumniService, private route: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {

    // fetching datas from url
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

  getDetail(alroll: number){
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
  }

    //-------------------------------------------
  // get alumni by roll no.
  getAlumniByRoll(alroll: number){
    // redirecting to another link with roll no.
    this.redirect.navigate(['alumni/alm-get-alumni-rollno', alroll]);
  }
  //-------------------------------------------

  //-------------------------------------------
  // get alumni by dname
  getAlmByDname(dname: string){
    // redirecting to another link with roll no.
    this.redirect.navigate(['department/get-alm-list-dname', dname]);
  }
  //-------------------------------------------

}
