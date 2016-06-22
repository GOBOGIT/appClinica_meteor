import { Estudios } from '../../../imports/api/mongo.js';
import './estudios.html';

var listaTipo = [
    'Embarazo',
    'estudios clínicos', 
    'ultrasonidos',
    'Tomografías',
    'Resonancia',
    'Químicas' 
  ];

var listaS = [
    'Hombre',
    'Mujer'
  ];


Template.estudios.lista = function() {
    return listaTipo;
};

Template.estudios.listaSexo = function() {
    return listaS;
};

Template.estudios.helpers({

estudios() {
    return Estudios.find({});
}

/* estudios: [{
	titulo: 'Estudio 1',
    descripcion: 'Descripción 1',
    esPromo: true
 },{
    titulo: 'Estudio 2',
    descripcion: 'Descripcion 2',
    esPromo: true    
 },{
    titulo: 'Estudio 3',
    descripcion: 'Descripcion 3',
    esPromo: false  
 }], */
});

Template.estudios.onRendered(function(){
    $('.ui.dropdown').dropdown();
    
    $('.filtros .button').on('click', function() {
        $('.filtros .ui.dropdown').dropdown('clear');
  });
});