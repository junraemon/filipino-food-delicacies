import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  FirebaseModule,
  AngularFireDatabaseModule,
  AngularFireAuthModule
} from './firebase/firebase.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FirebaseModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
