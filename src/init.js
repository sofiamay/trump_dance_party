$(document).ready(function() {
  window.walldancers = [];
  window.floordancers = [];


  // create two separe on click function that represent two different buttons
    // each button will create a new dancer on either the wall or floor

  $('.addWalldancer').on('click', function(event) {
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      100,
      100,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    walldancers.push(dancer);
  });

  $('.addFloordancer').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
      var dancer = new dancerMakerFunction(
      575,
      1600,
      Math.random() * 1000
    );
  
    $('body').append(dancer.$node);
    floordancers.push(dancer);
  });
});

$('.lineup').on('click', function(event) {
  var left = 700;
  var top = 700;
  //function called when user clicks on a dancer to make him jump
  var jump = function() {
    $(this).animate({
      'left': '300px',
      'top': '800px'
    }, 1000);
    $(this).animate({
      'top': '200px'
    });
    $(this).unbind();
  };
  var lineup = function(dancers) {
    for (var i = 0; i < dancers.length; i++) {
      $dancer = dancers[i].$node;
      $dancer.stop();
      $dancer.animate({
      'left': left.toString() + 'px',
      'top' : top.toString() + 'px'
    }, 5000);
      left += 100;
      top -= 10;
      //attach handler to make dancer jump on click
      $dancer.click(jump);
    }
  };
  //lineup dancers
  lineup(walldancers);
  lineup(floordancers);

  //show message: "click dancers to make them jump!"
  $message = $('<div class="jump-message">Click on Trump to make him jump!</div>') 
  $('body').append($message);

    
  });