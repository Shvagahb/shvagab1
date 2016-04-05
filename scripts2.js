//-----------Rainbow again--------------//

var wordmarkx = document.getElementsByClassName('rainbow-wordmarx')[0];

var wordmarkImgx = document.getElementsByClassName('rainbow-wordmark__imagx')[0];
var canvasx = document.getElementsByClassName('rainbow-wordmark__canvax')[0];
var ctxx = canvasx.getContext('2d');
var trailCountx = 20;
console.log(canvasx, canvas);
canvasx.width = 650;
var canvasWidthx = canvasx.width;
var canvasHeightx = canvasx.height;

// ----- load image ----- //

var whiteImgx = new Image();
whiteImgx.onload = onWhiteImgLoadx;
whiteImgx.src = 'pics/imbianca.svg';
console.log(whiteImgx, whiteImg);

function onWhiteImgLoadx() {
  setColorCanvasx( 'red', '#AA333F' );
  setColorCanvasx( 'purple', '#A68390' );
  setColorCanvasx( 'green', '#39421F' );
  setColorCanvasx( 'orange', '#806227' );
  animatex();
}

var colorCanvasesx = {};

// get a canvas with the logotype rendered in a color
function setColorCanvasx( name, color ) {
  var colorCanvasx = document.createElement('canvas');
  colorCanvasx.setAttribute("id", "secondColorCanvas");
  colorCanvasx.width = whiteImgx.width;
  colorCanvasx.height = whiteImgx.height;
  var colorCtxx = colorCanvasx.getContext('2d');
  colorCtxx.drawImage( whiteImgx, 0, 0 );
  colorCtxx.globalCompositeOperation = 'source-in';
  colorCtxx.fillStyle = color;
  colorCtxx.fillRect( 0, 0, whiteImgx.width, whiteImgx.height );
  colorCanvases[ name ] = colorCanvasx;
}
// ----- animate rainbow ----- //

var isHoveringx;
var tx = 0;

var rainbowx = [];
(function() {
  for ( var i=0; i < trailCountx; i++ ) {
    rainbowx.push(null);
  }
})();

wordmarkImgx.onmouseenter = function() {
  isHoveringx = true;
};

wordmarkImgx.onmouseleave = function() {
  isHoveringx = false;
};

var colorCyclex = [ 'red', 'purple', 'green', 'orange' ];

function animatex() {
  updatex();
  renderx();
  requestAnimationFrame( animate );
}

function updatex() {
  tx++;


  var colorCycleIndex = Math.floor( t / 8 ) % 4;
  var nextColor = isHoveringx ? colorCyclex[ colorCycleIndex ] : null;

  rainbowx.pop();
  rainbowx.pop();
  rainbowx.pop();
  rainbowx.unshift( nextColor );
  rainbowx.unshift( nextColor );
  rainbowx.unshift( nextColor );
}

function renderx() {
  ctxx.clearRect( 0, 0, canvasWidthx, canvasHeightx );

  // iterate backwards through rainbow
  for ( var i = rainbowx.length-1; i >= 0; i-- ) {
    var color = rainbowx[i];
    if ( color ) {
      ctxx.drawImage( colorCanvases[ color ], i+1, i+1 );
    }
  }
}
