import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PanelPage } from '../panel/panel';
import { PlayingPage } from '../playing/playing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToOtherPage(page) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    if (page === 'PanelPage'){
      this.navCtrl.push(PanelPage);
    }else{
      this.navCtrl.push(PlayingPage);
    }
  }




}
