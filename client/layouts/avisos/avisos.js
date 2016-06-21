import './avisos.html';

Template.avisos.onRendered(function(){
    $('.ui.dropdown').dropdown();
    
    $('.filtros .button').on('click', function() {
        $('.filtros .ui.dropdown').dropdown('clear');
  });
});