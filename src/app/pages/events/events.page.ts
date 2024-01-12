import { Component, OnInit ,ViewChild} from '@angular/core';
import { CalendarComponent } from 'ionic6-calendar';
import { CalendarMode } from 'ionic6-calendar';
import { LoadingController, ModalController } from '@ionic/angular';
import { EventDetailsPage } from '../event-details/event-details.page';
import { AppServiceService } from 'src/app/services/app-service.service';
import { format, parseISO } from 'date-fns';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ProfileComponent } from '../components/profile/profile.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  @ViewChild(CalendarComponent, { static: false }) myCal!: CalendarComponent;
  allEvents:any[] = [];
  currentDate = new Date(2023,10,26);
  currentMonth: string = "ss";
  minDate = new Date().toISOString();
  showAddEvent: boolean=true;
  isToday!: boolean ;
  showPicker1 = false;
  showPicker2 = false;
  dateValue1 = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  dateValue2 = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString1:any ;
  formattedString2:any ;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(2023,10,26),
  };
  newEvent:any = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    img:''
  };

  myData:any = [
    {
     title: 'What is Lorem Ipsum?',
     description: 'What is Lorem Ipsum?',
     startTime: new Date(2023,10,22,12,11,11),
     endTime: new Date(2023,10,22,14,11,11),
     img: 'https://picsum.photos/200'
    },
    {
     title: 'What is Lorem Ipsum?',
     description: 'What is Lorem Ipsum?',
     startTime: new Date(2023,10,22,12,11,11),
     endTime: new Date(2023,10,22,14,11,11),
     img: 'https://picsum.photos/200'
   },
    {
     title: 'What is Lorem Ipsum?',
     description: 'What is Lorem Ipsum?',
     startTime: new Date(2023,10,23,8,11,11),
     endTime: new Date(2023,10,13,9,11,11),
     img: 'https://picsum.photos/200'
   },
   {
     title: 'What is Lorem Ipsum?',
     description: 'What is Lorem Ipsum?',
     startTime: new Date(2023,10,21,2,11,11),
     endTime: new Date(2023,10,21,4,11,11),
     img: 'https://picsum.photos/200'
   },
   {
     title: 'What is Lorem Ipsum?',
     description: 'What is Lorem Ipsum?',
     startTime: new Date(2023,10,20,12,11,11),
     endTime: new Date(2023,10,20,14,11,11),
     img: 'https://picsum.photos/200'
   } 
   ] 
    returnDataFromModal:any;
  constructor(public modalController: ModalController, public loadingController: LoadingController, private service: AppServiceService) { 
    this.formattedString1 = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyy');

    this.formattedString2 = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),'HH:mm, MMM d, yyy')
  }

  ngOnInit() {
    // this.allEvents = this.myData;
    console.log(this.allEvents); 
    
    this.presentLoading().then(() => {
      this.service.getEventList().subscribe((res) => {
        res.document.records.forEach((event:any) => {
          this.allEvents.push({
            title: event.title,
            startTime:  new Date(event.startTime),
            endTime: new Date(event.endTime),
            description: event.description,
            img: event.img,
            event_id: event.event_id
          });
          
        })
       // this.allEvents = res.document.records;
        console.log(this.allEvents);
        console.log(this.myData);
        this.today();
        this.loadingController.dismiss();
      });
    });
  }

  dateChanged1(value1:any) {
    console.log(value1);
    this.dateValue1 = value1;
    this.formattedString1 = format(parseISO(value1), 'HH:mm, MMM d, yyy');
    this.showPicker1 = false;
  }

  dateChanged2(value2:any) {
    console.log(value2);
    this.dateValue2 = value2;
    this.formattedString2 = format(parseISO(value2), 'HH:mm, MMM d, yyy');
    this.showPicker2 = false;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "कृपया  थोडा वेळ वाट पहा आम्ही सर्वर वरून डेटा तुमच्या करिता  घेऊन येत आहोत .... ",
    });
    await loading.present();
  }
  

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
  async onEventSelected(ev:any) {
    this.newEvent = ev;
    const modal = await this.modalController.create({
      component: EventDetailsPage,
      componentProps: ev
    });
    return await modal.present();
  }

  
  today() {
    this.calendar.currentDate = new Date(2021,10,26);
  }

  changeMode(mode:any) {
    this.calendar.mode = mode;
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      img: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
    }
  
  addEvent() {
      this.allEvents.push({
        title: this.newEvent.title,
        startTime:  new Date(this.formattedString1),
        endTime: new Date(this.formattedString2),
        description: this.newEvent.description,
        img: this.newEvent.img
      });
      console.log(this.allEvents);
      
      this.showHideForm();
    }

    async notificationModal(ev:any) {
      const modal = await this.modalController.create({
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
      const modal = await this.modalController.create({
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
