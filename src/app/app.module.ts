import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { CreateAdminComponent } from './MyComponents/crud/admin/create-admin/create-admin.component';
import { FormsModule } from '@angular/forms';
import { GetAlumnisComponent } from './MyComponents/crud/admin/get-alumnis/get-alumnis.component';
import { GetDepartmentsComponent } from './MyComponents/crud/admin/get-departments/get-departments.component';
import { CreateDepartmentComponent } from './MyComponents/crud/department/create-department/create-department.component';
import { CreateAlumniComponent } from './MyComponents/crud/alumni/create-alumni/create-alumni.component';
import { DeleteAdminComponent } from './MyComponents/crud/admin/delete-admin/delete-admin.component';
import { AlmGetAlumniRollnoComponent } from './MyComponents/crud/alumni/alm-get-alumni-rollno/alm-get-alumni-rollno.component';
import { AlmGetAlumnisComponent } from './MyComponents/crud/alumni/alm-get-alumnis/alm-get-alumnis.component';
import { GetAlumniRollnoComponent } from './MyComponents/crud/admin/get-alumni-rollno/get-alumni-rollno.component';
import { ModalsComponent } from './MyComponents/modals/modals.component';
import { UpdateAlumniComponent } from './MyComponents/crud/admin/update-alumni/update-alumni.component';
import { GetAlmListDnameComponent } from './MyComponents/crud/department/get-alm-list-dname/get-alm-list-dname.component';
import { NgIf } from '@angular/common';
import { DiscussionforumComponent } from './MyComponents/discussionforum/discussionforum.component';
import { MessageboardComponent } from './MyComponents/messageboard/messageboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateAdminComponent,
    GetAlumnisComponent,
    GetDepartmentsComponent,
    CreateDepartmentComponent,
    CreateAlumniComponent,
    GetAlumniRollnoComponent,
    DeleteAdminComponent,
    AlmGetAlumniRollnoComponent,
    AlmGetAlumnisComponent,
    ModalsComponent,
    UpdateAlumniComponent,
    GetAlmListDnameComponent,
    DiscussionforumComponent,
    MessageboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
