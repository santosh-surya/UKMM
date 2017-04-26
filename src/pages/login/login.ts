import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from './../../providers/login';
import { SignupPage } from './../signup/signup';
import { ResetPasswordPage } from './../resetpassword/resetpassword';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  
  constructor(public navCtrl: NavController, 
    public login: Login,
    public formBuilder: FormBuilder,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController){
      this.loginForm = formBuilder.group({
        email: ['santosh.singh@surya-solutions.com', Validators.compose([Validators.required])],
        password: ['password', Validators.compose([Validators.minLength(6), Validators.required])]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
   * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
   */
  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }
  facebookLogin(){
    var self = this;
    this.login.facebookLogin()
      .then((result) =>{
        self.navCtrl.setRoot(TabsPage);
      })
      .catch(error => {
        var msg = error;
        if (error.message){
          msg = error.message;
        }
          let alert = self.alertCtrl.create({
          message: msg,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
  }
  loginUser(){
    this.submitAttempt = true;
      console.log(this.loginForm.value);

    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.login.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then( authData => {
          this.navCtrl.setRoot(TabsPage);
          this.loading.dismiss();
        })
        .catch( error => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
            this.loading.dismiss();
        });
      this.loading = this.loadingCtrl.create({
      });
      this.loading.present();
    }
  }
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
}
