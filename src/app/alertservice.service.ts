import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
export class alert {
  type: string;
  condition: string;
  value: number;
}
@Injectable({
  providedIn: 'root'
})
export class AlertserviceService {
 alert:alert[]=[];
  // alert: string;
  private alertsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public alerts$: Observable<any[]> = this.alertsSubject.asObservable();

  addAlert(alert:any):void{
    const currentAlerts = this.alertsSubject.getValue() ||[];
    currentAlerts.push(alert);
    this.alertsSubject.next(currentAlerts);
  }
  
}
