import './clinicas.html';


var ciudades = [
    'Queretaro',
    'Celaya',
    'Toluca',
    'Ciudad del Carmen',
    'Distrito federal'
];

Template.clinicas.listaCiudades = function(){
    return ciudades;
};

Template.clinicas.onRendered(function(){
    $('.ui.dropdown').dropdown();
    
    $('.filtros .button').on('click', function() {
        $('.filtros .ui.dropdown').dropdown('clear');
  });
});

Template.clinicas.helpers({

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