import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeaderboardPage } from '../leaderboard/leaderboard';

@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html'
})
export class PanelPage {

  constructor(public navCtrl: NavController) {

  }



  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(LeaderboardPage);
  }

}
