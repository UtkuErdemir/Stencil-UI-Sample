import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {

  render() {
    return (
      <ion-footer class="ion-no-border">
        <p class="text-center">UE - 2020 </p>
        <div class="back-shape"></div>
      </ion-footer>
    );
  }

}
