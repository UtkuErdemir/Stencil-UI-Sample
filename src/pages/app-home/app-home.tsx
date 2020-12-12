import { Component,Element, h } from '@stencil/core';
import { topExpandAnimation, fadingAnimation } from '../../helpers/animations';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @Element() element: HTMLElement;
  componentDidLoad(){
    topExpandAnimation(this.element,'.home-card').play();
    fadingAnimation(this.element,'.img').play();
    fadingAnimation(this.element,'.custom-font').play();
    console.log(this.element.querySelector(".img"))
  }
  render() {
    return [
      <app-header></app-header>,
      <ion-img class="img" src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"></ion-img>,
      <h2 class="custom-font">Hoşgeldiniz, UE</h2>,
      <app-background></app-background>,
      <ion-card class="home-card">
        <ion-card-header>
          <div class="line"></div>
          <ion-card-title class="ion-text-center custom-font">Bilgilendirme</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item color="#F2F4F8"  lines="none">
            <ion-icon slot="start" icon="book-outline"></ion-icon>
            <p class="custom-font">Hayat güzel, çiçekler böcekler</p>
          </ion-item>
          <ion-item color="#F2F4F8"  lines="none">
            <ion-icon slot="start" icon="book-outline"></ion-icon>
            <p class="custom-font">Yazılacak deneme yazısı bulunamadı.</p>
          </ion-item>
          <ion-item color="#F2F4F8" lines="none">
            <ion-icon slot="start" icon="book-outline"></ion-icon>
            <p class="custom-font">Bu sözler hep yokluktan doğdu.</p>
          </ion-item>
          <ion-item color="#F2F4F8" lines="none">
            <ion-icon slot="start" icon="book-outline"></ion-icon>
            <p class="custom-font">İnsanoğlu çok garip bir varlıktır.</p>
          </ion-item>
        </ion-card-content>
      </ion-card>,
      <app-footer></app-footer>
    ];
  }
}
