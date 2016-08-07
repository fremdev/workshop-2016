import { TweenMax } from 'gsap';
import addButtonsListeners from './addButtonsListeners';

function initTimelineFull() {
  const toolTimeline = new TimelineMax();
  const duration = 1;

  toolTimeline.from('.mainTitle', duration, {opacity: 0, scale: 25, ease: Linear.easeInOut});

  toolTimeline.from('.title', duration, {opacity: 0, scale: 25, ease: Linear.easeInOut}, 0.25);

  toolTimeline.to('.superman img', duration-0.7, {left: 0, ease: Back.easeOut});

  toolTimeline.from('.superman img', duration-0.7, {skewX: '20deg', ease: Back.easeOut});

  toolTimeline.to('.mainTitle', duration, {right: -50, ease: Back.easeInOut}, 0.9);

  toolTimeline.staggerTo('.tool', duration, {top: 150, ease: Back.easeInOut}, 0.2, 0.9);

  addButtonsListeners(toolTimeline);
}

export default initTimelineFull;
