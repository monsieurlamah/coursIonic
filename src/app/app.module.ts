import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './pages/components/notifications/notifications.component';
import { ProfileComponent } from './pages/components/profile/profile.component';
import { AddressComponent } from './pages/components/address/address.component';
import { CoupanComponent } from './pages/components/coupan/coupan.component';
import { AddItemsComponent } from './pages/components/add-items/add-items.component';
import { AddAddressComponent } from './pages/components/add-address/add-address.component';
import { BookingChefComponent } from './pages/components/booking-chef/booking-chef.component';
import { EmailResetComponent } from './pages/components/email-reset/email-reset.component';
import { PhoneVerifyComponent } from './pages/components/phone-verify/phone-verify.component';
import { NgCalendarModule } from 'ionic6-calendar';
@NgModule({
  declarations: [AppComponent,NotificationsComponent,ProfileComponent,AddressComponent,CoupanComponent,AddItemsComponent,AddAddressComponent,BookingChefComponent,EmailResetComponent,PhoneVerifyComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, HttpClientModule,NgCalendarModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
