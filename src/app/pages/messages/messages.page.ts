import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController,ModalController, } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  user:any = [];
  returnDataFromModal:any;
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router,private modalCtrl : ModalController,) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMsg().subscribe((res) => {
        this.user = res.document.records;
        console.log(this.user);
        this.loadingController.dismiss();
      });
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }
  async notificationModal(ev:any) {
    const modal = await this.modalCtrl.create({
      component: NotificationsComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city":"Nanded"
      },
      cssClass: "my-modal-notification"
    })

    modal.onDidDismiss().then((data:any) => {
      this.returnDataFromModal = data;
      console.log(this.returnDataFromModal);
    })
    return await modal.present();
  }

  async presentModal(ev:any) {
    const modal = await this.modalCtrl.create({
      component: ProfileComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city":"Nanded"
      },
      cssClass: "my-modal"
    })

    modal.onDidDismiss().then((data:any) => {
      this.returnDataFromModal = data;
      console.log(this.returnDataFromModal);
    })
    return await modal.present();
  }

}
