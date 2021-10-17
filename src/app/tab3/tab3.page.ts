import { DadosService } from './../services/slides/dados.service';
import { ISlides } from './../models/ISlides.model';
import { Component, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  titulo = 'Tutoriais';

  slides: ISlides[] = [
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

  constructor(public dadosService: DadosService, public route: Router) {}

  exibirSlides(slide: ISlides) {
    this.dadosService.guardarDados('slide', slide);
    this.route.navigateByUrl('/meditacao-page');
  }
}
