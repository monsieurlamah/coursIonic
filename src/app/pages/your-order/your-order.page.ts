import { Component, OnInit } from '@angular/core';
import { AddItemsComponent } from '../components/add-items/add-items.component';
import { CoupanComponent } from '../components/coupan/coupan.component';
import { Router } from '@angular/router';
import { LoadingController,ModalController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';
@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.page.html',
  styleUrls: ['./your-order.page.scss'],
})
export class YourOrderPage implements OnInit {

  orders:any[] = [];
  number:any = 1;
  total_amt:any = 0;
  totalItemPrice:any;
  returnDataFromModal:any;
  constructor(private service: AppServiceService, public loadingController: LoadingController,private modalCtrl : ModalController,) { }


  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllYourOrders().subscribe((res) => {
        this.orders = res.document.records;
        console.log(this.orders);
        this.loadingController.dismiss();
        this.total();
      });
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }
  remove(id:any) {
    console.log(id);
    if (this.orders[id].qty > 1) {
      console.log(this.orders[id].qty);
      this.orders[id].qty = this.orders[id].qty - 1;
      this.total_amt = this.total_amt - this.orders[id].amount;
      this.removeItemPrice(this.orders[id].qty,this.orders[id].amount,this.orders[id].title)
    } else {
      this.orders[id].qty = 1;
    }

  }

  add(id:any) {
    console.log(id);
    console.log(this.orders[id].qty);
    this.orders[id].qty = this.orders[id].qty + 1;
    this.total_amt = this.total_amt + this.orders[id].amount;
    this.itemPrice(this.orders[id].qty,this.orders[id].amount,this.orders[id].title)

  }
  total() {
    for (let i = 0; i < this.orders.length; i++) {
      this.total_amt = this.total_amt + this.orders[i].amount;      
    }
  }

  itemPrice(qty:any, amt:any,title:any) {
    console.log(qty,amt,title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);    
  }

  removeItemPrice(qty:any, amt:any,title:any) {
    console.log(qty,amt,title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);    
  }

  deleteItem(i:any) {
    console.log(i);
    this.orders = this.orders.filter(item => item.id !== i);

  }

  async editCoupan(ev:any) {
    console.log("edited");
    const modal = await this.modalCtrl.create({
      component: CoupanComponent,
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

  async moreItems() {
    console.log("more items Added");
    const modal = await this.modalCtrl.create({
      component: AddItemsComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city":"Nanded"
      },
      cssClass: "bookingmodal"
    })

    modal.onDidDismiss().then((data:any) => {
      this.returnDataFromModal = data;
      console.log(this.returnDataFromModal);
    })
    return await modal.present();
  }

  orderDetails() {
    console.log("click");
    
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
