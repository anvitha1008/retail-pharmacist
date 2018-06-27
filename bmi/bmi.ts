import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-bmiCalcuPage',
  templateUrl: 'bmiCalcuPage.html'
})
export class bmiCalcuPage {
  weight;
  weight1;
  feet;
  inch;
  inches;
  meters;
  result :any;
  constructor(public alertCtrl: AlertController) {
  
  }

  bmi(f){
    this.weight = f.controls['weight'].value;
    this.weight1 = f.controls['weight1'].value;
    this.feet = f.controls['feet'].value;
    this.inch = f.controls['inch'].value;
    this.meters = (this.feet*0.3048) + (this.inch*0.0254);
    this.inches = (this.feet*12) + (this.inch*1);
    console.log(this.meters);
    console.log(this.inches);
    if(this.weight1 == "kg"){
      this.result = (this.weight)/ (this.meters*this.meters)
    }
    else if(this.weight1 == "lb"){
      this.result = (this.weight*703)/ (this.inches*this.inches)
    }
    console.log(Math.round(this.result));

    if (this.result<18){
      const alert = this.alertCtrl.create({
        title: 'You are Underweight',
        subTitle: 'your BMI: '+ Math.round(this.result),
        buttons: ['OK']
      });
      alert.present();
  }
  else if ((this.result>18) && (this.result<25)) {
      const alert = this.alertCtrl.create({
      title: 'Your wieght is Normal',
      subTitle: 'your BMI: '+ Math.round(this.result),
      buttons: ['OK']
    });
    alert.present();
  }
  else if ((this.result>25) && (this.result<30)) {
    const alert = this.alertCtrl.create({
    title: 'You are overweight',
    subTitle: 'your BMI: '+ Math.round(this.result),
    buttons: ['OK']
  });
  alert.present();
  }
  else if ((this.result>30) && (this.result<35)) {
    const alert = this.alertCtrl.create({
    title: 'You have Class-1 obesity ',
    subTitle: 'your BMI: '+ Math.round(this.result),
    buttons: ['OK']
  });
  alert.present();
  }
  else if ((this.result>35) && (this.result<40)) {
    const alert = this.alertCtrl.create({
    title: 'You have Class-2 obesity ',
    subTitle: 'your BMI: '+this.result,
    buttons: ['OK']
  });
  alert.present();
  }
  else if ((this.result>35) && (this.result<40)) {
    const alert = this.alertCtrl.create({
    title: 'You have Class-3 obesity ',
    subTitle: 'your BMI: '+ Math.round(this.result),
    buttons: ['OK']
  });
  alert.present();
  }
  else if (this.result>40) {
    const alert = this.alertCtrl.create({
    title: 'You have entered wrong values ',
    subTitle: 'your BMI: '+ Math.round(this.result),
    buttons: ['OK']
  });
  alert.present();
}

 
  }


}
