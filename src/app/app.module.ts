import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import 'hammerjs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    // Flex-layout
    FlexLayoutModule,

    HttpClientModule,

    FormsModule

  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
