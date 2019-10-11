import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUiComponent } from './components/auth-ui/auth-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthUiComponent],
  exports: [AuthUiComponent]
})
export class FirebaseModule {}
