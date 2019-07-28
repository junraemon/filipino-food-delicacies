import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Component({
  selector: 'rcp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;

  addRecipeForm: FormGroup;
  constructor(public fb: FormBuilder, private afs: AngularFirestore) {
    this.itemsCollection = afs.collection('recipes');
    this.addRecipeForm = this.fb.group({
      name: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  ngOnInit() {}

  addRecipe(e) {
    this.itemsCollection.add(this.addRecipeForm.value);
  }
}
