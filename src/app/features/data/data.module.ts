import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MainComponent } from './components/main/main.component';

import { AddUserComponent } from './components/add-user/add-user.component';
import { UserGetComponent } from './components/user-get/user-get.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [

    MainComponent,
    AddUserComponent,
    UserGetComponent,
    EditUserComponent,
   
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class DataModule { }
