import './clinicas.html';

Template.clinicas.onRendered(function(){
    $('.ui.dropdown').dropdown();
    
    $('.filtros .button').on('click', function() {
        $('.filtros .ui.dropdown').dropdown('clear');
  });
});