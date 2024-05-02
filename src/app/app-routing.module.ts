import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigEmailComponent } from './config-email/config-email.component';
import { NewAlertComponent } from './add-alert/new-alert.component';
import { ServerListComponent } from './server-list/server-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/servers-list', pathMatch: 'full' },
  { path: 'servers-list', component: ServerListComponent },
  { path: 'add-alerts', component: NewAlertComponent },
  { path: 'configure-email', component: ConfigEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
