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
    }
  ];

  constructor() {}

}
