import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items : any[];
  titles :string[];
  titles1 :string[];
  searchQuery: string = '';

  guidelines: AngularFireObject<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    /* this.guidelines = db.object('/guidelines');*/
    this.initialItems();
  }

  initialItems(){
    this.items = [
      {
        'title': 'Cardiology',
        'icon': 'heart',
        'description': 'http://www.acc.org/guidelines#doctype=Guidelines',
        'color': '#E63135'
      },
      {
        'title': 'Renal Disease',
        'icon': 'leaf',
        'description': 'http://www.kdigo.org/clinical_practice_guidelines/pdf/CKD/KDIGO_2012_CKD_GL.pdf',
        'color': '#0CA9EA'
      },
      {
        'title': 'Pain',
        'icon': 'walk',
        'description': 'https://www.cdc.gov/drugoverdose/prescribing/guideline.html',
        'color': '#F46529'
      },
      {
        'title': 'Bipolar Disorder',
        'icon': 'man',
        'description': 'https://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/bipolar.pdf',
        'color': '#FFD439'
      },
      {
        'title': 'Huamn Immunodeficiency virus',
        'icon': 'man',
        'description': 'https://aidsinfo.nih.gov/contentfiles/lvguidelines/adultandadolescentgl.pdf',
        'color': '#CE6296'
      },
      {
        'title': 'Diabetes',
        'icon': 'color-filter',
        'description': 'https://diabetesed.net/wp-content/uploads/2017/12/2018-ADA-Standards-of-Care.pdf',
        'color': '#78BD43'
      },
      
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(ItemDetailsPage, { item: item });
    console.log(this.items)
  }

  getItems(ev: any) {
    this.initialItems();
    const val = ev.target.value;
    console.log(val);

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }
}
