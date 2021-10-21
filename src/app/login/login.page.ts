import { IUser } from './../models/IUser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  public fundoPosition = 0;
  public fundoDiff = 80;

  public userLogin: IUser = {};
  public userRegister: IUser = {};

  private loading: any;

  constructor(
    public toastController: ToastController,
    private route: Router,
    private loadingCtrl: LoadingController,
    private authService: AuthService) { }

  ngOnInit() {
  }

  async login(){
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Logado com sucesso! Seja Bem-Vindo.', 'success');
    }catch(error) {
      console.error(error);
      this.presentToast(error.message, 'warning');
    }finally {
      this.loading.dismiss();
    }
  }

  async register(){
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    }catch(error) {
      console.error(error);

      this.presentToast(error.message, 'danger');
    }finally {
      this.loading.dismiss();
    }
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

  async presentToast(message: string, cor: string) {
    const toast = await this.toastController.create({
      message,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, aguarde...'
    });
    return this.loading.present();
  }

}
