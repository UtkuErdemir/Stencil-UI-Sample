import { Component, h, State, Element } from '@stencil/core';
import { createGesture, GestureConfig } from '@ionic/core';
import { slideLeftAnimation, } from '../../helpers/animations';

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.css',
})
export class AppList {
  @State() items: string[] = [];
  @State() selected: string[] = [];
  @Element() element: HTMLElement;  
  componentWillLoad() {
    setTimeout(() => {
      this.items = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten"
      ];
    }, 2000);
  }
  componentDidLoad(){
    setTimeout(() => {
      const config:GestureConfig ={ 
        gestureName:"slide-left",
        el: this.element.querySelector("ion-card"),
        threshold: 0,
        onStart: (detail) => { console.log(detail)},
        onMove:(detail)=>{ this.element.querySelector("ion-card").style.transform = `translateX(${detail.deltaX*0.5}px)`;},
        onEnd: (detail) => { if(detail.currentX<40) {
          slideLeftAnimation(this.element,'ion-item').play();
          this.selected.push(this.items[0]);
        }
        else{
          this.element.querySelectorAll("ion-card")[0].style.transform = `translateX(0px)`;
        }
         console.log(detail.currentX); console.log(this.items);},
      };
      const gesture = createGesture(config);
      gesture.enable();
    }, 3000);
  }

 
  render() {
    return [
      <app-header></app-header>,
      <ion-content>
         <ion-list id="div" lines="none">
          {this.items.map((item, index) => (
            <ion-item style={{ "--animation-order": index % 20 } as any}>
              <ion-card mode="ios" id="card">
                <ion-card-header>
                <ion-item>
                <ion-icon slot="start" name="barcode"></ion-icon>
                <ion-label>{item}</ion-label>
                </ion-item>
                </ion-card-header>
                <ion-card-content>
                  <ion-item><strong>Cinsiyet:</strong> Erkek</ion-item>
                  <ion-item><strong>Cinsiyet:</strong> Erkek</ion-item>
                  <ion-item><strong>Cinsiyet:</strong> Erkek</ion-item>
                  <ion-item><strong>Cinsiyet:</strong> Erkek</ion-item>
                </ion-card-content>
              </ion-card>
              <app-background></app-background>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>,
      <app-footer></app-footer>
    ];
  }

}