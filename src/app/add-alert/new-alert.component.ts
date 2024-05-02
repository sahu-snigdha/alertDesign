import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertserviceService } from '../alertservice.service';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.component.html',
  styleUrls: ['./new-alert.component.css']
})
export class NewAlertComponent implements OnInit {
  selectedAlertType: string = 'hardDiskMemoryLoad';
  selectedCondition: string = '<';
  value: number = 80;
  url: string = '';
  responseString: string = '';
  Response:string;
  alert: string;
  @Input() selectedServer;
  @Output() alertAdded = new EventEmitter<any>();
  constructor(public alertService:AlertserviceService,public router: Router,private modalService: ModalService) { }

  ngOnInit(): void {
    
  }
  addAlert() {
    let alert;
    if (this.selectedAlertType === 'hardDiskMemoryLoad') {
        alert = {
            type: this.selectedAlertType,
            condition: this.selectedCondition,
            value: this.value.toString()
        };
    } else if (this.selectedAlertType === 'webServer') {
        alert = {
            type: this.selectedAlertType,
            url: this.url,
            responseString: this.responseString
        };
    }

    this.alertService.addAlert(alert);
    this.router.navigate(['servers-list'])
  
}
}
