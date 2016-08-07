function addButtonsListeners(timeline) {
  document.getElementById('start').addEventListener('click', () => {timeline.play()});
  document.getElementById('pause').addEventListener('click', () => {timeline.pause()});
  document.getElementById('stop').addEventListener('click', () => {timeline.stop()});
  document.getElementById('reverse').addEventListener('click', () => {timeline.reverse()});
}

export default addButtonsListeners;
