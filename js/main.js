//@prepros-prepend jquery.dev.js
//@prepros-prepend tweenmax.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend ie10-viewport.js

$(document).ready(function(){

  // Back., Elastic., Bounce., SlowMo.
  
  TweenMax.from('.jumbotron', 1, {opacity:0});
	TweenMax.from('.navbar-brand', .5, {top: -50, opacity: 0, ease:Power0.easeOut}); 
	TweenMax.from('.jumbotron img', 1, {bottom: 0, opacity: 0, ease:Power0.easeOut})
});