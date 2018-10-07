(function (canvas, ctx){
  //how much offset every second line should have
  let offset = 50
  //height difference between each line
  let deltaY = 50;
  //distance between each word on x-axis
  let deltaX = 100;

  let color = "#000";
  let font = "25px sans";


  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx.font = font;
  ctx.fillStyle = color;
  let offsetTracker = 0;
  for (let y = 0; y <= canvas.height; y+=deltaY){
    for (let x = 0; x < canvas.width; x+=deltaX) {
      ctx.fillText("word",x + offsetTracker,y);
    }
    offsetTracker+=offset
    if (offsetTracker > offset) offsetTracker = 0;
  }
})(document.querySelector('canvas'), document.querySelector('canvas').getContext('2d'))
