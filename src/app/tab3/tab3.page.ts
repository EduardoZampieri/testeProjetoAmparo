//import { Tab2Page } from './../tab2/tab2.page';
import { DadosService } from './../services/slides/dados.service';
import { ISlides } from './../models/ISlides.model';
import { Component, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { IAgenda } from '../models/IAgenda.model';
import _ from 'lodash';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  titulo = 'Tutoriais';

  //listaBotao: ISlides[];

  slidesFacil: ISlides[] = [
    {
      esporte: 'Meditação',
      // eslint-disable-next-line max-len
      video: 'https://www.youtube.com/embed/tGMQWqMqXh0',
      passos: [
        '1 - Deite no chão',
        '2 - Faça flexão',
        '3 - Sei lá kkkk',
      ],
      foto1: ['assets/icon/meditação.jpeg'],
      foto2: [''],
    },
    {
      esporte: 'Yoga',
      video: '',
      passos: [
        '1 - Corra',
        '2 - Pule',
        '3 - Agache'
      ],
      foto1: [''],
      foto2: [''],
    },
  ];

  slidesMedio: ISlides[] = [
    {
      esporte: 'Meditação',
      // eslint-disable-next-line max-len
      video: 'https://www.youtube.com/embed/tGMQWqMqXh0',
      passos: [
        '1 - Deite no chão',
        '2 - Faça flexão',
        '3 - Sei lá kkkk',
      ],
      foto1: ['assets/icon/meditação.jpeg'],
      foto2: [''],
    },
    {
      esporte: 'Yoga',
      video: '',
      passos: [
        '1 - Corra',
        '2 - Pule',
        '3 - Agache'
      ],
      foto1: [''],
      foto2: [''],
    },
  ];

  slidesDificil: ISlides[] = [
    {
      esporte: 'Meditação',
      // eslint-disable-next-line max-len
      video: 'https://www.youtube.com/embed/tGMQWqMqXh0',
      passos: [
        '1 - Deite no chão',
        '2 - Faça flexão',
        '3 - Sei lá kkkk',
      ],
      foto1: ['assets/icon/meditação.jpeg'],
      foto2: [''],
    },
    {
      esporte: 'Yoga',
      video: '',
      passos: [
        '1 - Corra',
        '2 - Pule',
        '3 - Agache'
      ],
      foto1: [''],
      foto2: [''],
    },
  ];

  constructor(
    public dadosService: DadosService,
    public route: Router,
    //public listas: Tab2Page
    ) {
      //acho que o erro ta na igualdade da lista com a listaFacil/Medio/Dificil
      //if(this.listas.lista === this.listas.listaFacil) {
      //  this.listaBotao = this.slidesFacil;
      //}
      //else if(this.listas.lista === this.listas.listaMedio) {
      //  this.listaBotao = this.slidesMedio;
      //}
      //else if(this.listas.lista === this.listas.listaDificil) {
      //  this.listaBotao = this.slidesDificil;
      //}
    }

  exibirSlides(slide: ISlides) {
    this.dadosService.guardarDados('slide', slide);
    this.route.navigateByUrl('/meditacao-page');
  }

  //exibirBotao() {
  //  if(this.listas.lista === this.listas.listaFacil) {
  //    this.listaBotao = this.slidesFacil;
  //  }
  //  else if(this.listas.lista === this.listas.listaMedio) {
  //    this.listaBotao = this.slidesMedio;
  //  }
  //  else if(this.listas.lista === this.listas.listaDificil) {
  //    this.listaBotao = this.slidesDificil;
  //  }
  //};
}
