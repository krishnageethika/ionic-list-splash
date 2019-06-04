import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {
 
  @ViewChild(Slides) slides: Slides;

  public lottieConfig;
  lottieConfig2;
  lottieConfig3: Object;
  private anim;
  anim2;
  anim3: any;
  private animationSpeed: number = 1;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lottieConfig = {
      path: 'assets/lottie/man_and_chat.json',
      renderer: 'canvas',
      autoplay: true,
      loop: false
    };

    this.lottieConfig2 = {
      path: 'assets/lottie/man_and_pay_with_credit_card.json',
      renderer: 'canvas',
      autoplay: false,
      loop: false
    };

    this.lottieConfig3 = {
      path: 'assets/lottie/man_and_travel.json',
      renderer: 'canvas',
      autoplay: false,
      loop: false
    };
  }

  ionViewDidLoad() {}

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  handleAnimation2(anim2: any) {
    this.anim2 = anim2;

  }

  handleAnimation3(anim3: any) {
    this.anim3 = anim3;

  }


  slideChanged() {

    let currentIndex = this.slides.getActiveIndex();

    if (currentIndex === 0) {
      this.anim.setSpeed(2);
      this.anim.play();
      this.anim2.stop();
      this.anim3.stop();

    }

    if (currentIndex === 1) {
      this.anim2.setSpeed(2.2);
      this.anim2.play();
      this.anim3.stop();
      this.anim.stop();
    }

    if (currentIndex === 2) {
      this.anim3.setSpeed(2);
      this.anim3.play();
      this.anim2.stop();
      this.anim.stop();

    }

  }

  goNext(slide) {
    this.slides.slideTo(slide, 1000, true);
  }

  login() {
    this.navCtrl.push(LoginPage); 
  }


}
