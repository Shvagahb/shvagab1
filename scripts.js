var wordmark = document.getElementsByClassName('rainbow-wordmark')[0];

var wordmarkImg = document.getElementsByClassName('rainbow-wordmark__image')[0];
var canvas = document.getElementsByClassName('rainbow-wordmark__canvas')[0];
var ctx = canvas.getContext('2d');
var trailCount = 20;
canvas.width = 650;
canvas.height = 350;
var canvasWidth = canvas.width;
console.log(canvasWidth);
var canvasHeight = canvas.height;
console.log(canvasHeight);


// ----- load image ----- //

var whiteImg = new Image();
whiteImg.src = 'pics/hiimbianca.svg';
whiteImg.onload = onWhiteImgLoad;

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
  colorCanvas.setAttribute("id", name);
  console.log(colorCanvas);
  colorCanvas.width = whiteImg.width;
  colorCanvas.height = whiteImg.height;
  var colorCtx = colorCanvas.getContext('2d');
  colorCtx.drawImage( whiteImg, 0, 0 );
  colorCtx.globalCompositeOperation = 'source-in';
  colorCtx.fillStyle = color;
  colorCtx.fillRect( 0, 0, colorCanvas.width, colorCanvas.height );
  colorCanvases[ name ] = colorCanvas;
  console.log(colorCanvases);
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


//------------------END OF RAINBOW STUFF--------------------------------

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
  	document.getElementById("about").style.visibility = "visible";
  	TweenMax.to(".fadeIn",3, {opacity:1});
    TweenMax.to(".AboutTxt", 2, {x:-290});
	  TweenMax.to(".BiancaTxt", 2, {x:330});
 }
 //,{
  //   offset:"20%";
  // }
})

$(function(){

    // Init Controller
    var scrollMagicController = new ScrollMagic.Controller();



var tween = TweenMax.to('#work', 5, {
	backgroundColor:"#696969"
});

var scene = new ScrollMagic.Scene({
	triggerElement: '#work',
	duration: 1000
})
.setTween(tween)
.addTo(scrollMagicController);


});


//-----------Rainbow again--------------//

// var wordmarkx = document.getElementsByClassName('rainbow-wordmarx')[0];
//
// var wordmarkImgx = document.getElementsByClassName('rainbow-wordmark__imagx')[0];
// var canvasx = document.getElementsByClassName('rainbow-wordmark__canvax')[0];
// var ctxx = canvasx.getContext('2d');
// var trailCountx = 20;
// console.log(canvasx, canvas);
// canvasx.width = 650;
// var canvasWidthx = canvasx.width;
// var canvasHeightx = canvasx.height;
//
// // ----- load image ----- //
//
// var whiteImgx = new Image();
// whiteImgx.onload = onWhiteImgLoadx;
// whiteImgx.src = 'pics/imbianca.svg';
// console.log(whiteImgx, whiteImg);
//
// function onWhiteImgLoadx() {
//   setColorCanvasx( 'red', '#AA333F' );
//   setColorCanvasx( 'purple', '#A68390' );
//   setColorCanvasx( 'green', '#39421F' );
//   setColorCanvasx( 'orange', '#806227' );
//   animatex();
// }
//
// var colorCanvasesx = {};
//
// // get a canvas with the logotype rendered in a color
// function setColorCanvasx( name, color ) {
//   var colorCanvasx = document.createElement('canvas');
//   colorCanvasx.setAttribute("id", "secondColorCanvas");
//   colorCanvasx.width = whiteImgx.width;
//   colorCanvasx.height = whiteImgx.height;
//   var colorCtxx = colorCanvasx.getContext('2d');
//   colorCtxx.drawImage( whiteImgx, 0, 0 );
//   colorCtxx.globalCompositeOperation = 'source-in';
//   colorCtxx.fillStyle = color;
//   colorCtxx.fillRect( 0, 0, whiteImgx.width, whiteImgx.height );
//   colorCanvasesx[ name ] = colorCanvasx;
// }
// // ----- animate rainbow ----- //
//
// var isHoveringx = false;
// var tx = 0;
//
// var rainbowx = [];
// (function() {
//   for ( var i=0; i < trailCountx; i++ ) {
//     rainbowx.push(null);
//   }
// })();
//
// wordmarkImgx.onmouseenter = function() {
//   isHoveringx = true;
// };
//
// wordmarkImgx.onmouseleave = function() {
//   isHoveringx = false;
// };
//
// var colorCyclex = [ 'red', 'purple', 'green', 'orange' ];
//
// function animatex() {
//   updatex();
//   renderx();
//   requestAnimationFrame( animate );
// }
//
// function updatex() {
//   tx++;
//
//
//   var colorCycleIndex = Math.floor( tx / 8 ) % 4;
//   console.log(colorCycleIndex);
//   var nextColor = isHoveringx ? colorCyclex[ colorCycleIndex ] : null;
//
//   rainbowx.pop();
//   rainbowx.pop();
//   rainbowx.pop();
//   rainbowx.unshift( nextColor );
//   rainbowx.unshift( nextColor );
//   rainbowx.unshift( nextColor );
// }
//
// function renderx() {
//   ctxx.clearRect( 0, 0, canvasWidthx, canvasHeightx );
//
//   // iterate backwards through rainbow
//   for ( var i = rainbowx.length-1; i >= 0; i-- ) {
//     var color = rainbowx[i];
//     if ( color ) {
//       ctxx.drawImage( colorCanvasesx[ color ], i+1, i+1 );
//     }
//   }
// }
