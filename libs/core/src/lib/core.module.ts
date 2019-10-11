import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseModule } from '@filipino-food-delicacies/firebase';
import { components } from './components';

@NgModule({
  imports: [CommonModule, FirebaseModule],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {}
