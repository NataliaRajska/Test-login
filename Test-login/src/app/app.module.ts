import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule} from 'angularfire2/auth'
import {environment} from "../environments/environment";
import { ClassicLoginComponent } from './classic-login/classic-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicLoginComponent
  ],
  imports: [
    AngularFireAuthModule.initialize
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
