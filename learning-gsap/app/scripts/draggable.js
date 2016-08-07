import { TweenMax } from 'gsap';
import Draggable from 'gsap/src/uncompressed/utils/Draggable';

function initDraggable() {
  const gridContainer = document.getElementsByClassName('gridContainer');

  Draggable.create('.moveAble', {
    bounds: gridContainer,
    edgeResistance: 0.65,
    // dragResistance: 0.75,
    cursor: 'pointer',
    type: 'x, y'
  });
}

export default initDraggable;
