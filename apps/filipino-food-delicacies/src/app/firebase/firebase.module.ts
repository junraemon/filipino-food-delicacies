import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

export const FirebaseModule = AngularFireModule.initializeApp(environment);
export { AngularFireDatabaseModule, AngularFireAuthModule };
