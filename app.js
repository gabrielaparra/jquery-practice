$(document).ready(function () {

  var userColor = prompt('What\'s your favorite color?');
  $('a').css('color', userColor);

  $('a').click(function(event) {
    event.preventDefault();
    //prevents the 'target _blank' from happening

    var randomNumber = Math.round(Math.random() * 50) + 1;

    $('h1').css('font-size', randomNumber + 'px');
  });

  var leftAmount = 0;
  $('#dino-btn').click(function() {
    leftAmount += 30;

    $('#dino-img').css('position', 'relative');
    $('#dino-img').css('left', leftAmount + 'px');
  });

  var currentImgState = 'normal';

  $('#src-btn').click(function() {
    if (currentImgState === 'normal') {
      $('#src-img').prop('src', 'https://guideimg.alibaba.com/images/shop/2015/10/11/20/star-wars-and-starbucks-coffee-star-wars-starbucks-coffee-coffee-stars-stickers_10773320.jpeg');
      currentImgState = 'parody';
    } else {
      $('#src-img').prop('src', 'http://www.kowalskis.com/sites/kowalskis.com/files/images/departments/starbucks-logo-with-border.png');
      currentImgState = 'normal';
    }
  });

  $("#input-btn").click(function() {
    var pastedImg = $('#input-img').val();  //val only works with input tags
    $('#src-img').prop('src', pastedImg);
  });

  var currentCount = 0;
  $('#increase-btn').click(function () {
    currentCount++;
    $('#count-tag').html(currentCount);
    //take the new var value and put it inside the actual html document

    if (currentCount > 15) {
      $('#hot-tag').addClass('really-hot');
    }
    else if (currentCount > 10) {
      $('#hot-tag').addClass('hot');
    }
    else if (currentCount > 5) {
      $('#hot-tag').addClass('warm');
    }
  });













});
