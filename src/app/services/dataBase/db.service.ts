import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite: SQLite) { }

  this.sqlite.create({
    name: '',
    location: ''
  })
  .then(db: SQLiteObject) => {


  }
}
