import { Component,Element, h } from '@stencil/core';
import { menuController } from '@ionic/core';
import { menuOpenScaleAnimation, menuCloseScaleAnimation } from '../../helpers/animations';
import { routes } from '../../routes';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @Element() element: HTMLElement; 
  componentDidLoad(){
    menuController.enable(true, 'first');
  }

  render() {
    return [
      <ion-menu side="start" type="push" onIonWillOpen={()=>menuOpenScaleAnimation(this.element,'#main').play()} onIonDidClose={()=>menuCloseScaleAnimation(this.element,'#main').play()} menuId="first" contentId="main">
        <ion-list id="inbox-list">
          <ion-list-header>Utku Erdemir</ion-list-header>
          <ion-note>github.com/UtkuErdemir</ion-note>

          <ion-menu-toggle auto-hide="false">
            {
              routes.map((value)=>{
                if(value.showMenu){
                  return (
                    <ion-item routerDirection="root" lines="none" href={value.url}>
                    <ion-icon slot="start"  icon={value.iconName}></ion-icon>
                      <ion-label>{value.title}</ion-label>
                    </ion-item>
                  )
                }
              })
            }
          </ion-menu-toggle>
        </ion-list>

      </ion-menu>,
      <div id="main">
        <ion-content>
        <ion-router useHash={false}>
          {
            routes.map((value)=>(
              <ion-route url= {value.url} component= {value.component} />
            ))
          }
        </ion-router>
        <ion-nav id="nav"/>
        </ion-content>
      </div>
    ];
  }   
}
