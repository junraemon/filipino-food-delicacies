import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FirebaseModule } from '@filipino-food-delicacies/firebase';
import { components } from './components';

@NgModule({
  imports: [CommonModule, RouterModule, FirebaseModule],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {}
