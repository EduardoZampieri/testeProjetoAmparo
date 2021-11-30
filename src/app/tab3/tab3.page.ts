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

  listaBotao: ISlides[] = [
    {
      esporte: 'Meditação',
      // eslint-disable-next-line max-len
      video: 'https://www.youtube.com/embed/tGMQWqMqXh0',
      passos: [
        '1 - Reservar um tempo',
        '2 - Encontrar um local calmo',
        '3 - Adotar uma postura confortável',
        '4 - Controlar a respiração',
        '5 - Focar a atenção'
      ],
      beneficios: [
        'Auxílio no tratamento da depressão e diminuição das chances de recaída',
        'Controle do estresse e a ansiedade',
        'Diminuição da insônia',
        'Melhora do foco e do rendimento no trabalho e estudos',
        'Ajuda no controle da pressão alta',
        'Ajuda no tratamento de distúrbios alimentares e obsessivo-compulsivos'
      ],
      foto1: ['assets/icon/meditação.jpeg'],
      foto2: [''],
    },
    {
      esporte: 'Yoga',
      video: 'https://youtu.be/ao8376g9O_A',
      passos: [
        '1 - Corra',
        '2 - Pule',
        '3 - Agache'
      ],
      beneficios: [
        ''
      ],
      foto1: [''],
      foto2: [''],
    },
  ];

  slidesFacil: ISlides[] = [
    {
      esporte: 'Meditação',
      // eslint-disable-next-line max-len
      video: 'https://www.youtube.com/embed/tGMQWqMqXh0',
      passos: [
        '1 - Reservar um tempo',
        '2 - Encontrar um local calmo',
        '3 - Adotar uma postura confortável',
        '4 - Controlar a respiração',
        '5 - Focar a atenção'
      ],
      beneficios: [
        'Auxílio no tratamento da depressão e diminuição das chances de recaída',
        'Controle do estresse e a ansiedade',
        'Diminuição da insônia',
        'Melhora do foco e do rendimento no trabalho e estudos',
        'Ajuda no controle da pressão alta',
        'Ajuda no tratamento de distúrbios alimentares e obsessivo-compulsivos'
      ],
      foto1: ['assets/icon/meditação.jpeg'],
      foto2: [''],
    },
    {
      esporte: 'Yoga',
      video: '',
      passos: [
        '1 - Tenha disciplina',
        '2 - Escolha um ambiente relaxante',
        '3 - Não alimente-se antes de praticar Yoga',
        '4 - Use roupas bem confortáveis',
        '5 - Atente-se aos limites do seu corpo',
        '6 - Leve a Yoga para a sua vida'
      ],
      beneficios: [
        'Ajuda no tratamento da depressão e da ansiedade',
        'Aumenta a qualidade do sono',
        'Auxilia no emagrecimento',
        'Permite uma maior flexibilidade'
      ],
      foto1: ['assets/icon/yoga.jpeg'],
      foto2: [''],
    },
  ];

  slidesMedio: ISlides[] = [
    {
      esporte: 'Legal',
      // eslint-disable-next-line max-len
      video: 'https://www.youtube.com/embed/tGMQWqMqXh0',
      passos: [
        '1 - Deite no chão',
        '2 - Faça flexão',
        '3 - Sei lá kkkk',
      ],
      beneficios: [
        ''
      ],
      foto1: ['assets/icon/'],
      foto2: [''],
    },
    {
      esporte: 'Rin',
      video: '',
      passos: [
        '1 - Corra',
        '2 - Pule',
        '3 - Agache'
      ],
      beneficios: [
        ''
      ],
      foto1: [''],
      foto2: [''],
    },
  ];

  slidesDificil: ISlides[] = [
    {
      esporte: 'Chaviou',
      // eslint-disable-next-line max-len
      video: 'https://youtu.be/ATXlJ5RPOxI',
      passos: [
        '1 - Deite no chão',
        '2 - Faça flexão',
        '3 - Sei lá kkkk',
      ],
      beneficios: [
        ''
      ],
      foto1: ['assets/icon/'],
      foto2: [''],
    },
    {
      esporte: 'TesteKun',
      video: '',
      passos: [
        '1 - Corra',
        '2 - Pule',
        '3 - Agache'
      ],
      beneficios: [
        ''
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

  callFirst() {
    this.listaBotao = [];
    this.listaBotao = this.slidesFacil;
  };

  callSecond() {
    this.listaBotao = [];
    this.listaBotao = this.slidesMedio;
  };

  callThird() {
    this.listaBotao = [];
    this.listaBotao = this.slidesDificil;
  };
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
