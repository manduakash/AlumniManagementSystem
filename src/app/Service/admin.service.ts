import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Admin } from '../Model/admin';
import { Alumni } from '../Model/alumni';
import { Department } from '../Model/department';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = "http://localhost:8080/admin";
  }

  //methods for linking rest api

  //post method
  createAdmin(admin: Admin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/saveAdmin`, admin);
  }

  //get method for alumnis
  getAlumnis(): Observable<Alumni[]>{
    return this.httpClient.get<Alumni[]>(`${this.baseURL}/getAlumnis`);
  }

  //get method for departments
  getDepartments(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.baseURL}/getDepartments`);
  }

  //get method by parameter
  getAlumniByRoll(alroll: number): Observable<Alumni>{
    return this.httpClient.get<Alumni>(`${this.baseURL}/getAlumni/${alroll}`);
  }

  //get method for verifying admin
  verifyAdmin(adusername: string, adpassword: string): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/verifyAdmin?adusername=${adusername}&adpassword=${adpassword}`);
  }

  //login admin
  loginAdmin(adusername: string, adpassword: string): Observable<Admin>{
    return this.httpClient.get<Admin>(`http://localhost:8080/login/loginAdmin?adusername=${adusername}&adpassword=${adpassword}`);
  }

  //update alumni
  updateAlumni(alroll: number, alumni: Alumni): Observable<Alumni>{
    return this.httpClient.put<Alumni>(`${this.baseURL}/updateAlumni/${alroll}`, alumni);
  }

  //delete alumni
  deleteAlumni(alroll: number): Observable<object>{
    return this.httpClient.delete<object>(`${this.baseURL}/deleteAlumni/${alroll}`);
  }

  //delete admin
  deleteAdmin(username: string): Observable<Object>{
    return this.httpClient.delete<any>(`${this.baseURL}/deleteAdmin/${username}`);
  }

}
