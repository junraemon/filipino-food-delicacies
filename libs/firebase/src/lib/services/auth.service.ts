import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class FirebaseAuthService {
  constructor(public auth: AngularFireAuth) {}

  isAdmin() {
    return this.auth.auth.currentUser;
  }
}
