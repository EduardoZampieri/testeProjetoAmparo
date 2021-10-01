import { ISlides } from './../../../models/ISlides.model';
import { DadosService } from './../../../services/slides/dados.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditacao-page',
  templateUrl: './meditacao-page.page.html',
  styleUrls: ['./meditacao-page.page.scss'],
})
export class MeditacaoPagePage implements OnInit {
  slide: ISlides;

  constructor(public dadosService: DadosService, private router: Router) {}

  ngOnInit() {
    this.slide = this.dadosService.pegarDados('slide');
    console.log('Slide enviado', this.slide);
  }

  navegar(){
    this.router.navigateByUrl('/tabs/tab3');
  }

}
