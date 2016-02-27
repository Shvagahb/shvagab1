var wordmark = document.querySelector('.rainbow-wordmark');

var wordmarkImg = wordmark.querySelector('.rainbow-wordmark__image');
var canvas = wordmark.querySelector('.rainbow-wordmark__canvas');
var ctx = canvas.getContext('2d');
var trailCount = 20;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// ----- load image ----- //

var whiteImg = new Image();
whiteImg.onload = onWhiteImgLoad;
whiteImg.src = 'pics/bi.png';

function onWhiteImgLoad() {
  setColorCanvas( 'red', '#AA333F' );
  setColorCanvas( 'purple', '#A68390' );
  setColorCanvas( 'green', '#39421F' );
  setColorCanvas( 'orange', '#806227' );
  animate();
}

var colorCanvases = {};

// get a canvas with the logotype rendered in a color
function setColorCanvas( name, color ) {
  var colorCanvas = document.createElement('canvas');
  colorCanvas.width = whiteImg.width;
  colorCanvas.height = whiteImg.height;
  var colorCtx = colorCanvas.getContext('2d');
  colorCtx.drawImage( whiteImg, 0, 0 );
  colorCtx.globalCompositeOperation = 'source-in';
  colorCtx.fillStyle = color;
  colorCtx.fillRect( 0, 0, whiteImg.width, whiteImg.height );
  colorCanvases[ name ] = colorCanvas;
}

// ----- animate rainbow ----- //

var isHovering;
var t = 0;

var rainbow = [];
(function() {
  for ( var i=0; i < trailCount; i++ ) {
    rainbow.push(null);
  }
})();

wordmarkImg.onmouseenter = function() {
  isHovering = true;
};

wordmarkImg.onmouseleave = function() {
  isHovering = false;
};

var colorCycle = [ 'red', 'purple', 'green', 'orange' ];

function animate() {
  update();
  render();
  requestAnimationFrame( animate );
}

function update() {
  t++;


  var colorCycleIndex = Math.floor( t / 8 ) % 4;
  var nextColor = isHovering ? colorCycle[ colorCycleIndex ] : null;

  rainbow.pop();
  rainbow.pop();
  rainbow.pop();
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
}

function render() {
  ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

  // iterate backwards through rainbow
  for ( var i = rainbow.length-1; i >= 0; i-- ) {
    var color = rainbow[i];
    if ( color ) {
      ctx.drawImage( colorCanvases[ color ], i+1, i+1 );
    }
  }
}

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
  	document.getElementById("about").style.visibility = "visible";
  	TweenMax.to(".fadeIn",3, {opacity:1});
    TweenMax.to(".logoRight", 2, {right:'370px'});
	TweenMax.to(".logoLeft", 2, {left:'70px'});
  }
})

$(function(){

    // Init Controller
    var scrollMagicController = new ScrollMagic.Controller();



var tween = TweenMax.to('#work', 5, {
	backgroundColor:"rgb(21, 12, 15);"
});

var scene = new ScrollMagic.Scene({
	triggerElement: '#work',
	duration: 5294
})
.setTween(tween)
.addTo(scrollMagicController);


});

// TweenMax.to(".logoRight", 2, {right:'670px'});
// TweenMax.to(".logoLeft", 2, {left:'670px'});
// TweenMax.to(".logoLeftLess", 1, {left:'320px'});
// TweenMax.to(".logoLeftLess1", 1, {left:'20px'});

