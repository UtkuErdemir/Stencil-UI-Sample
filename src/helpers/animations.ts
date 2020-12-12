import { createAnimation, Animation } from '@ionic/core';

export function topExpandAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(500).easing('ease-in-out').fromTo('height','0%','45%');
  return animation;
}
export function fadingAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(1500).easing('ease-in-out').fromTo('opacity','0','1');
  return animation;
}
export function menuOpenScaleAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(750).easing('ease-in-out').to('height','80%').to('width','80%').to('marginTop',(window.screen.height*0.1).toString()+'px');
  return animation;
}
export function menuCloseScaleAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(250).easing('ease-in-out').to('height','100%').to('width','100%').to('marginTop','0%');
  return animation;
}
export function slideDownAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(900).easing('ease-in-out').to('left','0%');
  return animation;
}
export function circleButtonAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(1000).easing('ease-in-out').fromTo('width','20%','90%');
  return animation;
}
export function vanishAnimation(element:HTMLElement,elementName:string):Animation{
  const item =  element.querySelector(elementName);
  const animation : Animation = createAnimation().addElement(item).duration(1000).easing('ease-in-out').fromTo('display','inline-block','none');
  return animation;
}
export function slideLeftAnimation(element:HTMLElement, elementName:string):Animation{
  const item =  element.querySelector(elementName);
  console.log(item);
  const animation : Animation = createAnimation().addElement(item).duration(1000).easing('ease-in-out').to('transform','translateX(-1500px)').to('width','0').to('height','0');
  return animation;
}