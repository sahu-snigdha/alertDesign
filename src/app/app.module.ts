import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ConfigEmailComponent } from './config-email/config-email.component';
import { NewAlertComponent } from './add-alert/new-alert.component';
import { AlertserviceService } from './alertservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    NewAlertComponent,
    ConfigEmailComponent,
    ModalContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AlertserviceService],
  bootstrap: [AppComponent],
  exports: [ModalContainerComponent]
})
export class AppModule { }
