import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoadingController,ModalController, PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images:any[] = ['/food/001.jfif','/food/001.JPG','/food/002.JPG','/food/003.JPG','/food/004.JPG','/food/005.JPG','/food/006.JPG','/food/007.JPG','/food/008.JPG','/001.JPG','/002.JPG','/003.JPG','/chef.png','/chef2.png','/chef3.jpg','/chef4.png',];
  returnDataFromModal:any;
  constructor(private modalCtrl : ModalController,) { }

  ngOnInit() {
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
