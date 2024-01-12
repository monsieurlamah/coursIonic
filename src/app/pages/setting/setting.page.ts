import { Component, OnInit } from '@angular/core';
import { LoadingController,ModalController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  setting:any = {
    appSetting: true,
    sms: true,
    offer: true,
    reminder: '',
    touchId: true,
    faceId: true,
  };
  returnDataFromModal:any;
  constructor(private service: AppServiceService, public loadingController: LoadingController, private modalCtrl : ModalController,) { }

  ngOnInit() {
  }

  changeApp(ev:any) {
    this.setting.appSetting = ev.detail.checked;
    console.log(this.setting);
  }

  changeSms(ev:any) {
    this.setting.sms = ev.detail.checked;
    console.log(this.setting);
  }

  changeOffer(ev:any) {
    this.setting.offer = ev.detail.checked;
    console.log(this.setting);
  }

  changeReminder(ev:any) {
    this.setting.reminder = ev.detail.value;
    console.log(this.setting);
  }

  changetouchId(ev:any) {
    this.setting.touchId = ev.detail.checked;
    console.log(this.setting);
  }

  changefaceId(ev:any){
    this.setting.faceId = ev.detail.checked;
    console.log(this.setting);
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
