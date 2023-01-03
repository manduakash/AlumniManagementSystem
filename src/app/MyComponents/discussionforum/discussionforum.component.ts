import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Discussionforums } from 'src/app/Model/discussionforums';
import { DiscussionforumsService } from 'src/app/Service/discussionforums.service';

@Component({
  selector: 'app-discussionforum',
  templateUrl: './discussionforum.component.html',
  styleUrls: ['./discussionforum.component.css']
})
export class DiscussionforumComponent implements OnInit {

  discussions!: Discussionforums[];
  discussionforum: Discussionforums = new Discussionforums();
  constructor(private dfService: DiscussionforumsService, private redirect: Router) { }

  ngOnInit(): void {
    this.fetchDiscussions();
  }

  fetchDiscussions(){
  this.dfService.fetchDiscussions().subscribe( data => {
    this.discussions = data;
  }, error => {
    console.log(error);
  }
  );}

  viewDiscussion(dfno: number){
    this.redirect.navigate(['messageboard', dfno]);
  }

  // for creating discussion
  addDiscussion(){
    this.dfService.addDiscussionforums(this.discussionforum).subscribe( data=>{
      this.discussionforum.topic = ""
      this.discussionforum.description = ""
      this.discussionforum.createdBy = ""
      
      this.fetchDiscussions();
    }, error=>{
      console.log(error);
    }
    )
  }

  // for updating discussion
  updateDiscussion(dfno: number){
    this.dfService.updateDiscussion(dfno, this.discussionforum).subscribe( data=>{
      this.fetchDiscussions();
    }, error=>{
      console.log(error);
    }
    )
  }

  // for deleting discussion
  deleteDiscussion(dfno: number){
    this.dfService.deleteDiscussion(dfno).subscribe( data=>{
      this.fetchDiscussions();
    }, error=>{
      console.log(error);
    }
    )
  }


}
