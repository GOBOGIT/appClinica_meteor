import './filtrosClinicas.html';

Template.filtrosClinicas.helpers({
    ciudades: [
        'Queretaro',
        'Celaya',
        'Toluca',
        'Ciudad del Carmen',
        'Distrito federal'
    ]
});

Template.filtrosClinicas.onRendered(function(){
    $('.ui.dropdown').dropdown();
    
    $('.limpiar').on('click', function() {
        $('.filtros .ui.dropdown').dropdown('clear');
  });
});

Template.itemClinicas.helpers({
    clinicas: [{
        nombre: 'Clnica Centro',
        calle: 'Agapito 10, con Avenida Tito',
        telefonos: '54 3333 4567 / 54 333 56545',
        horarios: 'de 10:00 a 19:00 continuo'
    },{
        nombre: 'Clnica Ronda Exterior',
        calle: 'Avenida Insurgentes 34',
        telefonos: '54 3333 4567 / 54 333 56545',
        horarios: 'de 09:00 a 18:00 continuo'    
    }],
});