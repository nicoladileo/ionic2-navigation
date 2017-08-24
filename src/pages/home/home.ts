import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { SecondPage } from '../second-page/second-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageCounter = {
    second: 0,
    third: 0
  }

  constructor(public navCtrl: NavController, public events:Events) {
    
  }

  ionViewDidLoad() {    
    this.events.subscribe("page-start",(data) => {
      let pageName = data.page;
      if (pageName == "SecondPage")
        this.pageCounter.second = this.pageCounter.second + 1;
      else if (pageName == "ThirdPage")
        this.pageCounter.third = this.pageCounter.third + 1;
    });
    
    console.log(this.pageCounter);
  }

  goToSecondPage() {
    console.log("Going to second page");
    let data = {
      name: "Nicola",
      surname: "Dileo"
    }
    this.navCtrl.push(SecondPage,{obj:data});
  }
}
