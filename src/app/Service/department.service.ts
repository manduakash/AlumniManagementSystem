import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumni } from '../Model/alumni';
import { Department } from '../Model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = "http://localhost:8080/department";
  }

  // service methods

  // post method
  createDepartment(department: Department): Observable<Department>{
    return this.httpClient.post<Department>(`${this.baseURL}/saveDepartment`, department);
  }


  //get method for alumnis
  getAlumnis(): Observable<Alumni[]>{
    return this.httpClient.get<Alumni[]>(`${this.baseURL}/getAlumnis`);
  }

   //get method by parameter
   getAlumniByRoll(id: number): Observable<Alumni>{
    return this.httpClient.get<Alumni>(`${this.baseURL}/getAlumnis/${id}`);
  }

  //get method for alumnis by dept. name
  getAlumnisByDname(dname: String): Observable<Alumni[]>{
    return this.httpClient.get<Alumni[]>(`${this.baseURL}/getAlumniByDname/${dname}`);
  }
}
