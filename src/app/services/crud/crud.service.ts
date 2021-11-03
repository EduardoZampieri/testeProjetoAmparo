/* eslint-disable arrow-body-style */
import { IAgenda } from './../../models/IAgenda.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private itensCollection: AngularFirestoreCollection<IAgenda>;

  constructor(private afs: AngularFirestore) {
    this.itensCollection = this.afs.collection<IAgenda>('Agenda');
  }

  getAll() {
    return this.itensCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, ...data};
        });
      })
    );
  };

  addItem(item: IAgenda) {
    return this.itensCollection.add(item);
  };

  updateItem(id: string, item: IAgenda) {
    return this.itensCollection.doc<IAgenda>(id).update(item);
  };

  getItem(id: string) {
    return this.itensCollection.doc<IAgenda>(id).valueChanges();
  };

  deleteItem(id: string) {
    return this.itensCollection.doc(id).delete();
  };

}
