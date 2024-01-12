import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController,ModalController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { OrderPage } from '../popup/order/order.page';
@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.page.html',
  styleUrls: ['./my-favourite.page.scss'],
})
export class MyFavouritePage implements OnInit {

  segId:any = "chef";
  orders:any[] = [];
  returnDataFromModal:any;
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router,public popoverController: PopoverController,private modalCtrl : ModalController,) { }


  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res) => {
        this.orders = res.document.records;
        console.log(this.orders);
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

  segmentChanged(ev:any) {
    this.segId = ev.detail.value;
    console.log(this.segId);
    
  }

  goToEvent() {
    this.router.navigate(['/events'])
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OrderPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  delete(id:any) {
    console.log("Deleted Id =" + id);
    
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
