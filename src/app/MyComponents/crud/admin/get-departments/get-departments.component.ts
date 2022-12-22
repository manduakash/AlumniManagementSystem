import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Model/department';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-get-departments',
  templateUrl: './get-departments.component.html',
  styleUrls: ['./get-departments.component.css']
})
export class GetDepartmentsComponent implements OnInit {

  departments: Department[] | undefined;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments(){
    this.adminService.getDepartments().subscribe( data => {
      this.departments = data;
    });
  }

}
