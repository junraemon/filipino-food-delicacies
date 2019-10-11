import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { SharedCoreModule } from '@filipino-food-delicacies/core';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    SharedCoreModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'add', pathMatch: 'full', component: AddComponent }
    ])
  ],
  declarations: [HomeComponent, AddComponent],
  exports: [HomeComponent, AddComponent]
})
export class RecipeModule {}
