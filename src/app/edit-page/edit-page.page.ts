import { CrudService } from './../services/crud/crud.service';
import { AuthService } from './../services/auth/auth.service';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { IAgenda } from './../models/IAgenda.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {

  public itens: IAgenda = {};
  private loading: any;
  private itemId: string = null;
  private itemSubscription: Subscription;

  constructor(
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private auth: AuthService,
    private activeRoute: ActivatedRoute,
    private crud: CrudService,
    private navCtrl: NavController
  ) {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    this.itemId = this.activeRoute.snapshot.params['id'];

    // eslint-disable-next-line curly
    if (this.itemId) this.loadItens();
  }

  ngOnInit() { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy() {
    if (this.itemSubscription){
      this.itemSubscription.unsubscribe();
    }
  }

  loadItens() {
    console.log('Estou sendo chamado');
    this.itemSubscription = this.crud.getItem(this.itemId).subscribe(data => {
      this.itens = data;
    });
  }

  async saveItem() {
    await this.presentLoading();

    this.itens.userId = (await this.auth.getAuth().currentUser).uid;

    if (this.itemId){
      try{
        await this.crud.updateItem(this.itemId, this.itens);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/tab2');
      }catch(error){
        this.presentToast('Erro ao tentar salvar', 'Danger');
        this.loading.dismiss();
      }
    }else{
      try{
        await this.crud.addItem(this.itens);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/tab2');
      }catch(error){
        this.presentToast('Erro ao tentar salvar', 'Danger');
        this.loading.dismiss();
      }
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
