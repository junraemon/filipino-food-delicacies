import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'add', pathMatch: 'full', component: AddComponent }
    ])
  ],
  declarations: [HomeComponent, AddComponent],
  exports: [HomeComponent, AddComponent]
})
export class RecipeModule {}
