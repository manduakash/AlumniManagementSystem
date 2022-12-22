import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../Model/messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient) { }

   // post method
   addMessages(msgs: Messages): Observable<Messages>{
    return this.httpClient.post<Messages>(`/messages/addMessages`, msgs);
  }

  //get method for messages
  fetchMessages(): Observable<Messages[]>{
    return this.httpClient.get<Messages[]>(`/messages/fetchMessages`);
  }
}
