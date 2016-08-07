import { TweenLite, CSSPlugin, TimelineLite, EasePack } from 'gsap';

function initTimeline() {
  const toolTimeline = new TimelineLite();
  toolTimeline.add(TweenLite.to('#toolBox', 1, {y:-80}));
  toolTimeline.add(TweenLite.to('#weightLifter', 1, {y:-80}));
}

export default initTimeline;
