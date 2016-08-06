function startTween() {
  const delay = 1;
  TweenLite.to('#toolBox', 2,
   {x: 290,
    y: 225,
    rotation: 180,
    alpha: 0.6,
    scale: 2,
    onComplete: returnToNormal,
    onCompleteParams: ['#toolBox', delay]
  });

  TweenLite.to('.asapReg', 3,
  {color: '#0fc',
  fontSize: '+=40',
  borderBottom: '7px solid #ff0000',
  fontStyle: 'italic',
  backgroundColor: 'rgba(155, 155, 255, 0.3)',
  onComplete: returnTextToNormal
  });
}

function returnToNormal(obj, delay) {
  TweenLite.to(obj, 2,
   {delay: delay,
    x: 0,
    y: 0,
    rotation: 0,
    alpha: 1,
    scale: 1
  });
}

function returnTextToNormal() {
  TweenLite.to('.asapReg', 3,
  {color: '#fff',
  fontSize: '-=40',
  borderBottom: 'none',
  fontStyle: 'normal',
  backgroundColor: 'none'
  });
}

export default startTween;
