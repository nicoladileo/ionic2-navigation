import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ThirdPage } from '../third-page/third-page';

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-second-page',
  templateUrl: 'second-page.html',
})
export class SecondPage {
  data: any;
  name = "";
  surname = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
    let obj = this.navParams.get("obj");
    this.data = obj;
    this.events.publish("page-start", {page:"SecondPage"});
  }

  goToThirdPage() {
    console.log("Open modal page");
    let modalCtrl = this.modalCtrl.create(ThirdPage, {param:this.data});
    modalCtrl.onDidDismiss((data) => {
      console.log("Received from ModalPage " + data);
      this.name = data.name;
      this.surname = data.surname;
    })

    modalCtrl.present();
  }
}
