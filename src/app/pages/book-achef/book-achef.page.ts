import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { BookingChefComponent } from '../components/booking-chef/booking-chef.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';


@Component({
  selector: 'app-book-achef',
  templateUrl: './book-achef.page.html',
  styleUrls: ['./book-achef.page.scss'],
})
export class BookAchefPage implements OnInit {
  returnDataFromModal:any;
  segId = "forever";
  availableType:any = {
    "today": null,
    "forever": 'monthly',
    "calendar": null
  }
  dateValue:any = '';
  dateValue2 = '';
  @ViewChild(IonDatetime, { static: true }) datetime!: IonDatetime;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  segmentChanged(ev:any) {
    console.log(ev.detail.value);
    this.segId = ev.detail.value;
    console.log(this.segId);
    if (this.segId == 'today') {
      this.availableType = {
        "today": 'wholeday',
        "forever": null,
        "calendar": null
      }
    }

    if (this.segId == 'forever') {
      this.availableType = {
        "today": null,
        "forever": 'monthly',
        "calendar": null
      }
    }

    if (this.segId == 'calender') {
      this.availableType = {
        "today": null,
        "forever": null,
        "calendar": '18:27, Dec 30 2021'
      }
    }
  }

  todayChange(ev:any) {
    console.log(ev.detail.value);
    this.availableType = {
      "today": null,
      "forever": null,
      "calendar": null
    }
    this.availableType.today = ev.detail.value;
  }

  foreverChange(ev:any) {
    console.log(ev.detail.value);
    this.availableType = {
      "today": null,
      "forever": null,
      "calendar": null
    }
    this.availableType.forever = ev.detail.value;

  }

  contiune() {
    console.log(this.availableType);
    this.presentOrderModal();
  }

  formatDate(value: any) {
    console.log(value);
    
    this.availableType = {
      "today": null,
      "forever": null,
      "calendar": null
    }
    this.availableType.calendar = format(parseISO(value), 'HH:mm, MMM dd yyyy');
    console.log(this.availableType);
  }



  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city": "Nanded"
      },
      cssClass: "bookingmodal"
    })
    return await modal.present();
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
  async presentOrderModal() {
    const modal = await this.modalCtrl.create({
      component: BookingChefComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city": "Nanded"
      },
      cssClass: "bookingmodal"
    })
    return await modal.present();
  }
  
}
