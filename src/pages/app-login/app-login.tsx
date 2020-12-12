import { Component, Element,h, State } from '@stencil/core';
import { slideDownAnimation, circleButtonAnimation } from '../../helpers/animations';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
})
export class AppLogin {
  @Element() element: HTMLElement;
  @State() clicked: boolean;
  componentDidLoad(){
    slideDownAnimation(this.element,".card").play();
    this.clicked=false;
  }
  logIn(){
    if(!this.clicked){
      circleButtonAnimation(this.element,'.button').play()
      this.clicked=true;
      setTimeout(()=>{
        const ionRouterElement = document.querySelector('ion-router');
        ionRouterElement.push('/home');
      },3000);
    }
  }
  render() {
    return [
      <div class="back-div"></div>,
      <ion-card class="card">
        <form>
                  <img class="logo" src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"/>
                  <h2>Giriş Yap</h2>
                  <ion-item color="#F2F4F8" lines="none">
                    <ion-icon color="primary" name="person" slot="start" class="ion-align-self-center"/>
                    <ion-input class="text-input custom-font" placeholder="Kullanıcı Adı"></ion-input>
                  </ion-item>
                  <ion-item color="#F2F4F8" lines="none">
                    <ion-icon  name="key" color="primary" slot="start" class="ion-align-self-center"/>
                    <ion-input class="text-input custom-font" placeholder="Şifre"></ion-input>
                  </ion-item>
                  <ion-button onClick={this.logIn.bind(this)} class="button" color="#057AA5" fill="solid">{this.clicked? <ion-spinner name="lines"></ion-spinner>:'Giriş Yap'}</ion-button>
        </form>
      </ion-card>,
      <app-background></app-background>,
      <app-footer></app-footer>
    ];
  }
}