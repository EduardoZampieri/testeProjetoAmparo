import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  email: string;
  senha: string;

  public fundoPosition = 0;
  public fundoDiff = 80;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'admin@admin.com' && this.senha === 'admin'){
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Bem vindo!', 'success');
    }else{
      this.presentToast('Erro! E-mail e/ou senha inválidos!', 'danger');
    }
  }

  cadastrar(){

  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

  segmentChanged(event: any){
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.fundoPosition += this.fundoDiff;
    } else {
      this.slides.slideNext();
      this.fundoPosition -= this.fundoDiff;
    }
  }

}
