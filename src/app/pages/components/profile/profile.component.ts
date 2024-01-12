import { Component, OnInit,Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ProfileMenuPage } from '../../popup/profile-menu/profile-menu.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  @Input() name: string ='';
  @Input() city: string ='';
  returnDataFromModal:any;
  constructor(private modalCtrl : ModalController,public popoverController: PopoverController) { }

  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss({
      "name": "Laxmi",
      "city":"Degloor"
    });
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfileMenuPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }
}
