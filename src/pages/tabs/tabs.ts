import { Component } from '@angular/core';

import { LeaderboardPage } from '../leaderboard/leaderboard';
import { PanelPage } from '../panel/panel';
import { HomePage } from '../home/home';
import { PlayingPage } from '../playing/playing';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LeaderboardPage;
  tab3Root = PanelPage;
  tab4Root = PlayingPage;


  constructor() {

  }
}
