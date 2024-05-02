import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertserviceService } from '../alertservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../modal.service';
import * as bootstrap from 'bootstrap';


export class server{
  server:string;
  host:string
}
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

 
  servers=[{server:'Shantanu server(202.23.4.00)',host:'Shantunu windowsnode(public)'},
                        { server:'Manav server(202.23.4.00)', host:'Manav windowsnode(public)'},
                        {server:'Sharita server(202.23.4.00)',host:'Sharita windows node(public)'}];
  SelectedServer: any ;
  emailId: any;
  mails: { emailids: string; sendAlertOnEmail: boolean; }[];
  emailIds: string = '';
  sendAlertOnEmail: boolean = false;
  data: any=[];
  sentmail:string;
  msg: string;
  msgs: string[]=[];
  allSentMails: string[]=[];
  showGrid: boolean=false;
  alerts: any[];
  showModal: boolean=false;
  selectedServer:any;
  constructor(private router:Router,public alertService: AlertserviceService,private modalService: ModalService) { }

  ngOnInit() {
    this.fetchConfigMailDetail();
    this.fetchtheSavedAlert();
    console.log(this.servers);
  }
  ShowserverList(){
   
   console.log(this.servers)
  }
 
  
  onServerSelect(event) {
    debugger
        this.SelectedServer = this.servers[event].host;
        console.log(this.SelectedServer)
      }
      
  configureEmail() {
    debugger
    
   
    this.data.forEach((obj)=>{if(obj.Emails.length==0 ){
      this.sentmail=obj.Emails;
      this.msgs.push("No EmailId is configured to send the Alert");
      this.allSentMails.push(obj.Emails);
      
      }
    else if(obj.Alerts.length==0){
      this.sentmail=obj.Emails;
      this.msgs.push("No Alerts configured,please clck add newalert to create Alert");
      this.allSentMails.push(obj.Emails);}
      else if(obj.Emails.length>0 &&  obj.Alerts.length>0){this.emailId=obj.Emails}
      if (this.msg) {
        // Prepare navigation extras with message and emails data
        const navigationExtras: NavigationExtras = {
          state: {
            msg: this.msgs,
            sentMail: obj.Emails
          }
        };
      this.router.navigate(['configure-email'],navigationExtras)
      }
     })
  }
  addNewAlert() {
    this.modalService.openModal({ selectedServer: this.SelectedServer });
  }
 
  fetchConfigMailDetail(){
    this.data = [
      { Emails: ["email1@example.com"], Alerts: ["alert1", "alert2"], sendAlertOnEmail: true },
      { Emails: [], Alerts: ["alert3"], sendAlertOnEmail: false },
      { Emails: ["email2@example.com"], Alerts: [], sendAlertOnEmail: true },
      { Emails: [], Alerts: [], sendAlertOnEmail: false }
    ];
  }
  fetchtheSavedAlert(){
    this.alertService.alerts$.subscribe(alerts => {
      this.alerts = alerts;
      if(this.alerts|| this.alerts!=null){
        this.showGrid=true
      }
       console.log(alerts)
  });
}
deleteRow(index){
  this.alerts.splice(index, 1)
}

openModal() {
  const modalElement = document.getElementById('myModal');
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

closeModal() {
  const modalElement = document.getElementById('myModal');
  const modal = bootstrap.Modal.getInstance(modalElement);
  if (modal) {
    modal.hide();
  }
}

}
