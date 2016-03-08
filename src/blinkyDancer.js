var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
 
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  this.$node.toggle();
};


// Walldancer subclass

var Walldancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="trump_wall"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(top);
  console.log(left);


};

Walldancer.prototype = Object.create(makeDancer.prototype);
Walldancer.prototype.constructor = Walldancer;
Walldancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

// Floordancer subclass
var Floordancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="trump_floor"></span>');

  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

Floordancer.prototype = Object.create(makeDancer.prototype);
Floordancer.prototype.constructor = Floordancer;
Floordancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

