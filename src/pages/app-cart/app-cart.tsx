import { Component, h, Element } from '@stencil/core';
import { GestureConfig, createGesture } from '@ionic/core';

@Component({
  tag: 'app-cart',
  styleUrl: 'app-cart.css',
})
export class AppCart {
  @Element() element: HTMLElement;
  componentDidLoad() {
    const card: any = this.element.querySelector('.cart-card');
    const config: GestureConfig = {
      gestureName: 'swipe-up',
      el: card,
      threshold: 0,
      direction: 'x',
      onMove: detail => {
        if (screen.height * 0.15 < detail.currentY) card.style.transform = `translateY(${detail.deltaY}px)`;
      },
      onEnd: detail => {
        if (detail.deltaY < 75) card.style.transform = `translateY(${screen.height*0.25*-1}px)`;
        else card.style.transform = `translateY(0px)`;
      },
    };
    const gesture = createGesture(config);
    gesture.enable();
  }
  render() {
    return [
      <app-header></app-header>,
      <ion-grid style={{"width":"100%"}}>
        <ion-row>
          <ion-col size="4">
            <ion-card mode="ios" class="option-card">
              <ion-card-content>asdasdsasdd</ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="4">
            <ion-card mode="ios" class="option-card">
              <ion-card-content>asdasdsasdd</ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="4">
            <ion-card mode="ios" class="option-card">
              <ion-card-content>asdasdsasdd</ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>,
      <ion-card class="cart-card">
        <ion-card-header>
          <div class="line"></div>
        </ion-card-header>
        <ion-card-content>
          <ion-segment>
            <ion-segment-button value="friends">
              <ion-label>Friends</ion-label>
            </ion-segment-button>
            <ion-segment-button value="enemies">
              <ion-label>Enemies</ion-label>
            </ion-segment-button>
            <ion-segment-button value="normally">
              <ion-label>Normally</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-card-content>
      </ion-card>,
      <app-footer></app-footer>,
    ];
  }
}
