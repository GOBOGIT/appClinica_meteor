jQuery(document).ready(function($) {

$('.ui.dropdown')
  .dropdown();

  $('.filtros .button')
  .on('click', function() {
    $('.filtros .ui.dropdown')
      .dropdown('clear');
  });

$('.ui.sticky')
  .sticky({
    context: '#contenido'
  });

});