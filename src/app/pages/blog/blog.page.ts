/*
  Theme Name: Hotel Managment App UI in Ionic 7
Theme URI: https://jswebapp.com
Author: JSWEBAPP Team
Author URI: https://jswebapp.com
Description: One solution for all your hotel management needs.Simplify and automate your daily hotel operations with a highly flexible and feature-rich system.
Tags: Hotel Mangment App , Ionic  Template , Ionic 7
Version: 1.2
Email : santosh@jswebapp.com
Youtube Tutorials : https://www.youtube.com/channel/UC3IX-HW44irnSEdETDZOWrA
Facebook Page : https://www.facebook.com/jswebapp
Pinterest : https://in.pinterest.com/gk0840/_created/
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController,ModalController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  blogs:any[] = [];
  returnDataFromModal:any;
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router,private modalCtrl : ModalController,) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllBlog().subscribe((res) => {
        this.blogs = res.document.records;
        console.log(this.blogs);
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

  goToBlog(id:any) {
    console.log(id);
    this.router.navigate(['/blog-post', id]);
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
