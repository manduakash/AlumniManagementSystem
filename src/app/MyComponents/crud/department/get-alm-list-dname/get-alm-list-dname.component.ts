import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumni } from 'src/app/Model/alumni';
import { DepartmentService } from 'src/app/Service/department.service';

@Component({
  selector: 'app-get-alm-list-dname',
  templateUrl: './get-alm-list-dname.component.html',
  styleUrls: ['./get-alm-list-dname.component.css']
})
export class GetAlmListDnameComponent implements OnInit {

  alumnis!: Alumni[];
  dname!: string;
  constructor(private deptService: DepartmentService, private route: ActivatedRoute, private redirect: Router) { }

  ngOnInit(): void {
    this.getAlumnisByDname();
  }

  getAlumnisByDname(){
    this.deptService.getAlumnisByDname(this.route.snapshot.params['dname']).subscribe( data => {
      this.alumnis = data;
      console.log(data);
    },error => console.log(error)
    );
  }

    // view alumni detail action method
    getDetail(alroll: number){
      this.redirect.navigate(['admin/get-alumni-rollno', alroll]);
    }

}
