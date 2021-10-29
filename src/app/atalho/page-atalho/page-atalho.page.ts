import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-atalho',
  templateUrl: './page-atalho.page.html',
  styleUrls: ['./page-atalho.page.scss'],
})
export class PageAtalhoPage implements OnInit {

  constructor(
    public alert: AlertController,
    private route: Router
    ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message: 'Escolha a tela para qual você quer ser direcionado. Você pode navegar entre elas depois também!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  down(){
    console.log('Down called');
    this.presentAlert();
  }

  btnSobre() {
    this.route.navigateByUrl('/tabs/tab1');
  };

  btnAgenda() {
    this.route.navigateByUrl('/tabs/tab2');
  };

  btnTutorial() {
    this.route.navigateByUrl('/tabs/tab3');
  };

}
