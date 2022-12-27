import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../Model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  // post method
  addNotification (notification: Notification): Observable<Notification>{
    return this.httpClient.post<Notification>(`http://localhost:8080/notification/addNotification`, notification);
  }

  //get method for notifications
  fetchNotifications(): Observable<Notification[]>{
    return this.httpClient.get<Notification[]>(`http://localhost:8080/notification/fetchNotifications`);
  }
}
