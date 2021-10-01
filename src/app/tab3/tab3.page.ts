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
      video: 'oi',
      passos: ['1 - Deite no chão', '2 - Faça flexão', '3 - Sei lá kkkk'],
      fotos: ['', '', '']
    },
    {
      esporte: 'Yoga',
      video: 'EAE',
      passos: ['1 - Corra', '2 - Pule', '3 - Agache'],
      fotos: [
      'https://c.tenor.com/f_wsfdMF2vAAAAAM/bebe.gif',
      'https://www.imagensanimadas.com/data/media/1291/pular-corda-imagem-animada-0005.gif',
      'https://zerohora.clicrbs.com.br/rbs/image/16862349.gif?w=580']
    },
  ];

  constructor(
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirSlides(slide: ISlides){
    this.dadosService.guardarDados('slide', slide);
    this.route.navigateByUrl('/meditacao-page');
  }

}
