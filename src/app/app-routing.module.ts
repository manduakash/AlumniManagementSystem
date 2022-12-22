import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { CreateAdminComponent } from './MyComponents/crud/admin/create-admin/create-admin.component';
import { CreateAlumniComponent } from './MyComponents/crud/alumni/create-alumni/create-alumni.component';
import { CreateDepartmentComponent } from './MyComponents/crud/department/create-department/create-department.component';
import { GetAlumniRollnoComponent } from './MyComponents/crud/admin/get-alumni-rollno/get-alumni-rollno.component';
import { AlmGetAlumniRollnoComponent } from './MyComponents/crud/alumni/alm-get-alumni-rollno/alm-get-alumni-rollno.component';
import { GetAlumnisComponent } from './MyComponents/crud/admin/get-alumnis/get-alumnis.component';
import { AlmGetAlumnisComponent } from './MyComponents/crud/alumni/alm-get-alumnis/alm-get-alumnis.component';
import { GetDepartmentsComponent } from './MyComponents/crud/admin/get-departments/get-departments.component';
import { DeleteAdminComponent } from "./MyComponents/crud/admin/delete-admin/delete-admin.component";
import { UpdateAlumniComponent } from './MyComponents/crud/admin/update-alumni/update-alumni.component';
import { GetAlmListDnameComponent } from './MyComponents/crud/department/get-alm-list-dname/get-alm-list-dname.component';
import { DiscussionforumComponent } from './MyComponents/discussionforum/discussionforum.component';
import { MessageboardComponent } from './MyComponents/messageboard/messageboard.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},

  //admin paths
  {path: 'admin/create-admin', component: CreateAdminComponent},
  {path: 'admin/get-alumnis', component: GetAlumnisComponent},
  {path: 'admin/get-departments', component: GetDepartmentsComponent},
  {path: 'admin/get-alumni-rollno/:alroll', component: GetAlumniRollnoComponent},
  {path: 'admin/update-alumni/:alroll', component: UpdateAlumniComponent},
  {path: 'admin/delete-admin', component: DeleteAdminComponent},

  //alumni paths
  {path: 'alumni/create-alumni', component: CreateAlumniComponent},
  {path: 'alumni/alm-get-alumnis', component: AlmGetAlumnisComponent},
  {path: 'alumni/alm-get-alumni-rollno/:alroll', component: AlmGetAlumniRollnoComponent},

  //departments paths
  {path: 'department/create-department', component: CreateDepartmentComponent},
  {path: 'department/get-alm-list-dname/:dname', component: GetAlmListDnameComponent},

  //discussion forum
  {path: 'discussionforum', component: DiscussionforumComponent},

  //message board
  {path: 'messageboard/:dfno', component: MessageboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
