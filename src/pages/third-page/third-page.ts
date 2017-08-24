import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events} from 'ionic-angular';

/**
 * Generated class for the ThirdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-third-page',
  templateUrl: 'third-page.html',
})

export class ThirdPage {
  data: any;
  name = "";
  surname = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events:Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
    console.log(this.navParams.get("param"));
    this.events.publish("page-start", {page:"ThirdPage"});
  }

  closeThirdPage(sourceButton:string) {
    if (sourceButton == "exitButton") {
      this.name = "";
      this.surname = "";
    }

    let dataBack = {
      name: this.name,
      surname: this.surname
    }
    this.viewCtrl.dismiss(dataBack);
  }
}
