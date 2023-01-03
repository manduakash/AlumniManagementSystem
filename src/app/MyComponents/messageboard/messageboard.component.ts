import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discussionforums } from 'src/app/Model/discussionforums';
import { Messages } from 'src/app/Model/messages';
import { DiscussionforumsService } from 'src/app/Service/discussionforums.service';
import { MessagesService } from 'src/app/Service/messages.service';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {

  discussionforum: Discussionforums = new Discussionforums();
  message: Messages = new Messages();
  messages: Messages[] = [];
  dfno!: number;
  constructor(private dfService: DiscussionforumsService, private route: ActivatedRoute, private dmService: MessagesService,) { }

  ngOnInit(): void {
    this.dfno = this.route.snapshot.params['dfno'];
    this.dfService.fetchDiscussion(this.dfno).subscribe( data => {
      console.log(data);
      this.discussionforum = data;
      this.discussionforum.messages = data.messages;
      this.messages = this.discussionforum.messages
    }, error => {
      console.log(error);
    });

    this.fetchMessages();

  }

  fetchMessages(){
    this.messages = this.discussionforum.messages
  }

  // for creating discussion
  addMessage(message: Messages){
    this.discussionforum.messages.push(message)
    this.dfService.addDiscussionforums(this.discussionforum).subscribe( data => {
      this.discussionforum = data;
      this.discussionforum.messages = data.messages;
      this.message.name = "";
      this.message.description = "";
      this.fetchMessages();
    })
  }

}
