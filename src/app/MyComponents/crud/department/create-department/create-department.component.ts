import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/Model/alert';
import { Department } from 'src/app/Model/department';
import { DepartmentService } from 'src/app/Service/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  department : Department = new Department();
  alert: Alert = new Alert();
  isAlert: boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
  }

  // create admin method using admin service
  createDepartment(){
    this.departmentService.createDepartment(this.department).subscribe(
      data => {
        console.log(data);
        this.alert.isAlert = true;
        this.alert.type = "success";
        this.alert.head = "Successfull";
        this.alert.message = "You have successfully created the department!";
        // redirecting to alumni list with alert object
        this.router.navigate(['admin/get-departments'],
        {queryParams:{data: btoa(JSON.stringify(this.alert))}});
    },
    error => {
      console.log(error)
      this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Invalid Credentials";
      this.alert.message = "Department name is already exists, Please try different one!";
      this.isAlert = this.alert.isAlert;
    }
    );
  }

  onSubmit(){
    console.log(this.department);
    this.createDepartment();
  }

}
