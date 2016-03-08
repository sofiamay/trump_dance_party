// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, node) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node // each subclass will have a css class
  this.setPosition(top, left); 
  this.step();
// new dancers will have their own position in the subclass
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


};

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
    // the basic this doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.lineup = function(dancers) {
    for (var i = 0; i < dancers.length; i++) {
    $dancer = dancers[i].$node;
    $dancer.animate({
    'left': this.left.toString() + 'px',
    'top' : this.top.toString() + 'px'
  }, 5000);
    left += 100;
    top -= 10;
  }
};