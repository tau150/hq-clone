import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-playing',
  templateUrl: 'playing.html',
})
export class PlayingPage {

  users:Array<Object>=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }


  ionViewDidLoad() {
    this.users = [
      { userName: 'santi', comment: 'start !!1'},
      { userName: 'asde', comment: ' yEEEESSS'},
      { userName: 'victor', comment: '#$@sad22'},
      { userName: 'juan', comment: '$22000'},
      { userName: 'exTE', comment: 'AKSJDAkljas'},
      { userName: 'lala', comment: 'asdasd'},
      { userName: 'looo', comment: '32411'},
      { userName: 'pill', comment: 'aaq3eda'},
      { userName: 'frida', comment: 'sd123e32'},
      { userName: 'corT', comment: '23423asdassad'},
      { userName: 'kevin', comment: '2323ddsad'},
      { userName: 'pilar', comment: 'my victory'},
    ]
  }

    

  

}
