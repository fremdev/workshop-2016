import { TweenMax } from 'gsap';
import addButtonsListeners from './addButtonsListeners';

function initTimelineMore() {
  const toolTimeline = new TimelineMax();
  const duration = 1;
  toolTimeline.to('#toolBox', duration, {y:-80, ease: Linear.easeInOut});
  toolTimeline.to('#weightLifter', duration, {y:-80, ease: Bounce.easeInOut});
  toolTimeline.to('#crazy', duration, {y:-80, ease: Elastic.easeInOut});
  toolTimeline.to('#leaf', duration, {y:-80, ease: Back.easeInOut});

  addButtonsListeners(toolTimeline);
}

export default initTimelineMore;
