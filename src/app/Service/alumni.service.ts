import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumni } from '../Model/alumni';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  private baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = "http://localhost:8080/alumni";
  }

  //methods for linking rest api

  //post method
  createAlumni(alumni: Alumni): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/saveAlumni`, alumni);
  }

  //get method
  getAlumnis(): Observable<Alumni[]>{
    return this.httpClient.get<Alumni[]>(`${this.baseURL}/getAlumnis`);
  }

  //get method
  getAlumniByRoll(alroll: number): Observable<Alumni>{
    return this.httpClient.get<Alumni>(`${this.baseURL}/getAlumni/${alroll}`)
  }

    //get method for verifying Alumni
    verifyAlumni(alroll: number, alpassword: string): Observable<Alumni>{
      return this.httpClient.get<Alumni>(`${this.baseURL}/verifyAlumni?alroll=${alroll}&alpassword=${alpassword}`);
    }

    //login Alumni
    loginAlumni(alroll: number, alpassword: string): Observable<Alumni>{
      return this.httpClient.get<Alumni>(`http://localhost:8080/login/loginAlumni?alroll=${alroll}&alpassword=${alpassword}`);
    }

}
