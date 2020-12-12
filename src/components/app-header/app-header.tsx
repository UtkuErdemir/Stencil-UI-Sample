import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {

  render() {
    return (
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button  />
        </ion-buttons>
        <ion-title class="text-left">Utku Erdemir</ion-title>
      </ion-toolbar>
    </ion-header>
    );
  }

}
