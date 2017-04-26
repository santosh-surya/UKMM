import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {
  public fireAuth: any;
  public fbProvider: any;
  public db: any;
  public devices: any;
  public users: any;
  public deviceTokens: any;
  
  constructor(public http: Http, public platform: Platform) {
  }

  init(){
    var config = {
        apiKey: "AIzaSyCtvju3n57Eu5G7G2_RicFq6n5JejeJrXg",
        authDomain: "ukmm-25682.firebaseapp.com",
        databaseURL: "https://ukmm-25682.firebaseio.com",
        storageBucket: "ukmm-25682.appspot.com",
        messagingSenderId: "875119661736"
    };
    firebase.initializeApp(config);
    console.log('Firebase Provider Initialised');
    this.fbProvider =  new firebase.auth.FacebookAuthProvider();
    this.db = firebase.database();
    this.devices = this.db.ref('/devices/');
    this.users = this.db.ref('/users/');
    this.deviceTokens = this.db.ref('/deviceTokens/');

  }

}
