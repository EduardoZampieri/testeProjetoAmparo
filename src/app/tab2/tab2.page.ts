import { IAgenda } from './../models/IAgenda.model';
import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  titulo = 'Agenda';

  lista: IAgenda[] = [
    {
      evento: 'Meditação',
      data: '10:20',
      descricao: 'só pra teste'
    },
    {
      evento: 'Yoga',
      data: '11:00',
      descricao: 'descricao kk'
    },
    {
      evento: 'Futebol',
      data: '12:00',
      descricao: 'com os parça'
    }
  ];

  listaFacil: IAgenda[] = [
    {
      evento: 'Meditação',
      data: '10:20',
      descricao: 'só pra teste'
    },
    {
      evento: 'Yoga',
      data: '11:00',
      descricao: 'descricao kk'
    },
    {
      evento: 'Futebol',
      data: '12:00',
      descricao: 'com os parça'
    }
  ];

  listaMedio: IAgenda[] = [
    {
      evento: 'Música',
      data: '10:20',
      descricao: 'só pra teste'
    },
    {
      evento: 'Cheiros',
      data: '11:00',
      descricao: 'descricao kk'
    },
    {
      evento: 'Correr',
      data: '12:00',
      descricao: 'com os parça'
    }
  ];

  listaDificil: IAgenda[] = [
    {
      evento: 'Nadar',
      data: '10:20',
      descricao: 'só pra teste'
    },
    {
      evento: 'Paraquedas',
      data: '11:00',
      descricao: 'descricao kk'
    },
    {
      evento: 'Cambalhota',
      data: '12:00',
      descricao: 'com os parça'
    }
  ];

  constructor() {}

  callFirst() {
    this.lista = [];
    this.lista = this.listaFacil;
  };

  callSecond() {
    this.lista = [];
    this.lista = this.listaMedio;
  };

  callThird() {
    this.lista = [];
    this.lista = this.listaDificil;
  };

}
