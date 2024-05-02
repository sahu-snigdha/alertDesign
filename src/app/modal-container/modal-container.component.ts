import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
  showModal: boolean = false;
  modalComponent: any = null;
  modalData: any = null;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.showModal$.subscribe((showModal: boolean) => {
      this.showModal = showModal;
      console.log(this.showModal)
      debugger
    });


    this.modalService.modalData$.subscribe((data: any) => {
      this.modalData = data;
      console.log(this.modalData)
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}

