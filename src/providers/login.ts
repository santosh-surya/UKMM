import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import {Facebook} from 'ionic-native';
import { Firebase } from './firebase';

/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Login {

  public userProfile: any;
  public currentUser: any;  
  public fbToken : any;

  constructor(public http: Http, public platform: Platform, public firebase: Firebase) {
    console.log('Login Provider');
  }
  loginUser(email: string, password: string): any {
    return this.firebase.fireAuth.signInWithEmailAndPassword(email, password);
  }

  facebookLogin(){
    var self = this;
     if ((this.platform.is('ios') && this.platform.is('cordova')) || this.platform.is('android')) {
       return new Promise(function(resolve, reject){
          Facebook.login(['email'])
            .then( (response) => {
              let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
              self.firebase.fireAuth.signInWithCredential(facebookCredential)
                .then((success) => {
                  console.log("Firebase success: " + JSON.stringify(success));
                  self.currentUser = success;
                  resolve(success);
                })
                .catch((error) => {
                  console.log("Firebase failure: " + JSON.stringify(error));
                  reject(error);
                });
          })
          .catch((error) => { 
            console.log(error); 
            reject(error); 
          });
       })
   }else{
    return new Promise(function(resolve, reject){
      self.firebase.fireAuth.signInWithPopup(self.firebase.fbProvider)
      .then((result)=>{
          if (result.user){
            self.userProfile = result.user;
            self.fbToken = result.credential.accessToken;
          }
          console.log(result);
          resolve(result);
      })
      .catch((error)=> {
          reject(error);
      })
    });
   }

  }
  signupUser(email: string, password: string): any {
    return this.firebase.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userProfile.child(newUser.uid).set({email: email});
      });
  }
  resetPassword(email: string): any {
    return this.firebase.fireAuth.sendPasswordResetEmail(email);
  }
  logoutUser(): any {
    return this.firebase.fireAuth.signOut();
  }

}
