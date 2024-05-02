import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModal = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModal.asObservable();

  private modalData = new BehaviorSubject<any>(null);
  modalData$ = this.modalData.asObservable();

  constructor() { }

  openModal(data: any) {
    debugger
    this.modalData.next(data);
    this.showModal.next(true);
  }

  closeModal() {
    this.showModal.next(false);
  }
}
