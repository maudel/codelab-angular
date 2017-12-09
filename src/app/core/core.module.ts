import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// services

import { AuthService} from './services/auth.service';
import { GenericService } from './services/generic.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    GenericService,
    AuthService
  ]
})
export class CoreModule { }
