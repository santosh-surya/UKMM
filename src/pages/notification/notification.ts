import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Notification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  public message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.message = navParams.get("message");
    console.log(this.message);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');

  }

}
