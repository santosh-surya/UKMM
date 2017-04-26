import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen, Push } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;
  // zone: NgZone;

  constructor(public platform: Platform, 
              public alertCtrl: AlertController,
              public storage: Storage
              ) {
    
    // //set the initial page
    // this.rootPage = TabsPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.rootPage = TabsPage;
      if (this.platform.is("cordova")){
        let push = Push.init({
          android: {
            senderID: "598320677247",
            sound: "true"
          },
          ios: {
            alert: "true",
            badge: "true",
            sound: "true"
          },
          windows: {}
        });
        let self = this;
        push.on('registration', (data) => {
          alert("device token ->"+ data.registrationId);
          //TODO - send device token to server
          var config = {
              apiKey: "AIzaSyCtvju3n57Eu5G7G2_RicFq6n5JejeJrXg",
              authDomain: "ukmm-25682.firebaseapp.com",
              databaseURL: "https://ukmm-25682.firebaseio.com",
              storageBucket: "ukmm-25682.appspot.com",
              messagingSenderId: "875119661736"
          };
          firebase.initializeApp(config);
          // var data ={registrationId: "xxxxxxxxx"};
          firebase.database().ref('/deviceTokens/').orderByChild("token").equalTo(data.registrationId).once("value", (snapshot)=>{
            if (snapshot.val() === null){
              var token = firebase.database().ref('/deviceTokens/').push();
              token.set({
                "token": data.registrationId,
                "platform": self.platform._platforms
              });  
              console.log(data.registrationId);
            }else{
              alert("device Token already registered");
            }
          });
        });

        push.on('notification', (data) => {
          console.log("Push notification: ", data);
          alert(data.message);
        });
        push.on('error', (e) => {
          console.log(e.message);
        });
      }
    });
  }
}
