import { TweenLite, CSSPlugin, TimelineLite, EasePack } from 'gsap';
import addButtonsListeners from './addButtonsListeners';

function initTimeline() {
  const toolTimeline = new TimelineLite({paused: true});
  const duration = 1;
  toolTimeline.add(TweenLite.to('#toolBox', duration, {y:-80, ease: Linear.easeInOut}));
  toolTimeline.add(TweenLite.to('#weightLifter', duration, {y:-80, ease: Bounce.easeInOut}));
  toolTimeline.add(TweenLite.to('#crazy', duration, {y:-80, ease: Elastic.easeInOut}));
  toolTimeline.add(TweenLite.to('#leaf', duration, {y:-80, ease: Back.easeInOut}));

  addButtonsListeners(toolTimeline);
}

export default initTimeline;
