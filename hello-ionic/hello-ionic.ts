import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { kineticCalcuPage } from '../kineticCalcuPage/kineticCalcuPage';
import { albumCalcuPage } from '../albumCalcuPage/albumCalcuPage';
import { bmiCalcuPage } from '../bmiCalcuPage/bmiCalcuPage';
import { pediatricCalcuPage } from '../pediatricCalcuPage/pediatricCalcuPage';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  num1:number;
  num2:number;
  add: any;

  albumPage(){
    this.navCtrl.push(albumCalcuPage)
  }

  kineticsPage(){
    this.navCtrl.push(kineticCalcuPage)
  }

  pediatricPage(){
    this.navCtrl.push(pediatricCalcuPage)
  }

  bmiPage(){
    this.navCtrl.push(bmiCalcuPage)
  }
}
