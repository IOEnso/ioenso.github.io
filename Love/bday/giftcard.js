$('.continue').css({'opacity': 0});
$('.yummy').css({'opacity': 0});

$('.love').hide();
$('.pick-error').hide();
$('.foods-container').hide();
$('.ordered').hide();

//$('.love-container').hide();

$('.hidden').removeClass('hidden');

$('.love').toggle('slide', { direction: 'up' }, 1000, () => {
  $('.yummy').animate({opacity: 1}, 2500, () => {
    $('.continue').animate({opacity: 1}, 1500);
    $('.continue').hover(
      () => $('.continue').css({'animation': 'none'}),
      () => $('.continue').css({'animation': 'bounce 4s infinite'}),
    );
    $('.continue').click(() => {
      $('.love-container').animate({'margin-left': '-100%'}, 1000, () => {
        $('.love-container').hide();
        //$('.foods-container').show();
        $('.foods-container').toggle('slide', { direction: 'right' }, 1000);
      });
    });
  });
});

$('.food').click((e) => {
  if($(e.target).hasClass('alert-success')) {
    $(e.target).removeClass('alert-success').addClass('alert-info');
  } else {
    $('.food.alert-success').removeClass('alert-success').addClass('alert-info');
    $(e.target).toggleClass('alert-info').toggleClass('alert-success');
  }
});

$('.add').click(() => {
  let treat = $('.add-input').val();
  if(treat) {
    $('.food.alert-success').removeClass('alert-success').addClass('alert-info');
    $('.foods').append('<li class="food alert alert-success">' + treat + '</li>')
    $('.add-input').val('');
  }
});

$('.pick').click(() => {
  if($('.food.alert-success')[0]) {
    $('.pick-error').hide();
    $('.foods-container').animate({'margin-left': '-100%'}, 1000, () => {
      $('.foods-container').hide();
      $('.ordered').toggle('slide', { direction: 'right' }, 1000)
    });
  } else {
    $('.pick-error').show();
  }
});
