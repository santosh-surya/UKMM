import { LoginPage } from './../login/login';
import { Login } from './../../providers/login';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public login: Login) {


  }
  logOut(){
    this.login.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
