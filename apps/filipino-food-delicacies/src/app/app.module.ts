import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CoreModule } from '@filipino-food-delicacies/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase, 'ffd'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
