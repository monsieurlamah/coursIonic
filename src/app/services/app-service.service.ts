/*
  Authors : JSWEBAPP (SANTOSH)
  Website : http://jswebapp.com/
  App Name : Hotel Managment App With Ionic 7
  This App Template Source code is licensed as per the
  terms found in the Website http://jswebapp.com/license
  Copyright and Good Faith Purchasers © 2022-present JSWEBAPP.
  Youtube : youtube.com/@jswebapp
  Email: santosh@jswebapp.com
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  getAllDishes(): Observable<any> {
    return this.http.get('assets/json/dish.json');
  }

  getAllNotifications(): Observable<any> {
    return this.http.get('assets/json/notification.json');
  }

  getAllPayments(): Observable<any> {
    return this.http.get('assets/json/payment.json');
  }

  getAllOrders(): Observable<any> {
    return this.http.get('assets/json/order.json');
  }

  getAllMenuDishes(): Observable<any> {
    return this.http.get('assets/json/menuDush.json');
  }

  getAllYourOrders(): Observable<any> {
    return this.http.get('assets/json/yourOrder.json');
  }

  getAllMsg(): Observable<any> {
    return this.http.get('assets/json/online.json');
  }

  getEventList(): Observable<any> {
    return this.http.get('assets/json/event.json');
  }

  getAllBlog(): Observable<any> {
    return this.http.get('assets/json/blog.json');
  }
}
