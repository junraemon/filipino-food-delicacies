import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'rcp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes$: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.recipes$ = db.collection('recipes').valueChanges();
  }
  ngOnInit() {}
}
