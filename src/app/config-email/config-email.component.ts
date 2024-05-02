import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-config-email',
  templateUrl: './config-email.component.html',
  styleUrls: ['./config-email.component.css']
})
export class ConfigEmailComponent implements OnInit {
@Input() senddatatoConfig;
emailIds: string = '';
  msg: any;
  sentMail: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    debugger
    const navigationState = window.history.state;
    this.msg = navigationState.msg;
    this.emailIds = navigationState.sentMail;
    console.log(this.emailIds)
    // this.emailIds=this.senddatatoConfig;
  }

}
