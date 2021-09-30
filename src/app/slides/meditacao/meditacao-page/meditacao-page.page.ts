import { ISlides } from './../../../models/ISlides.model';
import { DadosService } from './../../../services/slides/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditacao-page',
  templateUrl: './meditacao-page.page.html',
  styleUrls: ['./meditacao-page.page.scss'],
})
export class MeditacaoPagePage implements OnInit {
  slide: ISlides;

  constructor(public dadosService: DadosService) {}

  ngOnInit() {
    this.slide = this.dadosService.pegarDados('slide');
    console.log('Slide enviado', this.slide);
  }
}
