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
  this.$node = $('<img src="media/trumpbody.gif" class="trump_wall"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Walldancer.prototype = Object.create(makeDancer.prototype);
Walldancer.prototype.constructor = Walldancer;
Walldancer.prototype.stepBack = function () {
  var dancer = this;
  this.$node.animate({
    'left': '100px',
    'top': '20px'
  },
  {
    duration: 5000,
    complete: dancer.step.bind(dancer)
  });
};
Walldancer.prototype.step = function() {
  var dancer = this;
  this.$node.animate({
    'left': '1500px',
    'top': '300px'
  },
  {
    duration: 5000,
    complete: dancer.stepBack.bind(dancer)
  });
};

// Floordancer subclass
var Floordancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="trump_floor"></span>');

  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

Floordancer.prototype = Object.create(makeDancer.prototype);
Floordancer.prototype.constructor = Floordancer;
Floordancer.prototype.stepBack = function () {
  var dancer = this;
  this.$node.animate ({
    'left': '1600px',
    'top': '575px'
  },
  {
    duration: 5000,
    complete: dancer.step.bind(dancer)
  });
}
Floordancer.prototype.step = function() {
  var dancer = this;
  this.$node.animate({
    'left': '500px',
    'top' : '800px',
  }, 
  {
    duration: 5000,
    complete: dancer.stepBack.bind(dancer)
  });

};

