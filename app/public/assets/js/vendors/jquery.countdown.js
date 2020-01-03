(function($) {
  'use strict';

  $(document).ready(function() {
    $('.js-timer').countdown('2020/01/20', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="u-timer__section"><strong class="u-timer__amount">%D</strong> <em class="u-timer__period">dias</em></div>'
        + '<div class="u-timer__section"><strong class="u-timer__amount">%H</strong> <em class="u-timer__period">horas</em></div>'
        + '<div class="u-timer__section"><strong class="u-timer__amount">%M</strong> <em class="u-timer__period">minutos</em></div>'
        + '<div class="u-timer__section"><strong class="u-timer__amount">%S</strong> <em class="u-timer__period">segundos</em></div>'));
    });
  })

}(jQuery));