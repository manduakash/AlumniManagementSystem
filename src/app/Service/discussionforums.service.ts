import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discussionforums } from '../Model/discussionforums';
import { Messages } from '../Model/messages';

@Injectable({
  providedIn: 'root'
})
export class DiscussionforumsService {

  constructor(private httpClient: HttpClient) { }

   // post method
   addDiscussionforums(discussionforums: Discussionforums): Observable<Discussionforums>{
    return this.httpClient.post<Discussionforums>(`http://localhost:8080/discussionforums/addDiscussion`, discussionforums);
  }

  //get method for Discussionforums
  fetchDiscussions(): Observable<Discussionforums[]>{
    return this.httpClient.get<Discussionforums[]>(`http://localhost:8080/discussionforums/fetchDiscussions`);
  }

  //get method by dfno
  fetchDiscussion(dfno: number): Observable<Discussionforums>{
    return this.httpClient.get<Discussionforums>(`http://localhost:8080/discussionforums/fetchDiscussion/${dfno}`);
  }

  //update
  updateDiscussion(dfno: number, Df: Discussionforums): Observable<Discussionforums>{
    return this.httpClient.put<Discussionforums>(`http://localhost:8080/discussionforums/updateDiscussion/${dfno}`, Df);
  }

  //delete
  deleteDiscussion(dfno: number): Observable<object>{
    return this.httpClient.delete<object>(`http://localhost:8080/discussionforums/deleteDiscussion/${dfno}`);
  }

}
