import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from './../models/recipe';
import { AngularFireAuth } from '@angular/fire/auth';
import { customClaims } from '@angular/fire/auth-guard';

@Component({
  selector: 'rcp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipesCollection$: AngularFirestoreCollection<Recipe>;
  recipes$: Observable<any[]>;

  constructor(afs: AngularFirestore, public auth: AngularFireAuth) {
    this.recipesCollection$ = afs.collection<Recipe>('recipes');
    this.recipes$ = this.recipesCollection$.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  ngOnInit() {}

  get isAdmin() {
    const currentUser = this.auth.auth.currentUser || null;
    return currentUser && currentUser.uid === 'eEQt6AowUESKCc3wN3XjRWV6SQj2';
  }

  delete(recipe: Recipe) {
    const conf = confirm(`Are you sure you want to delete ${recipe.name}?`);
    if (conf) this.recipesCollection$.doc(recipe.id).delete();
  }
}
