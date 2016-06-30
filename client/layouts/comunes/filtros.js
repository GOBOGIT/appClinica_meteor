// variables temporarles en cliente
import { ReactiveDict } from 'meteor/reactive-dict';

import { Estudios } from '../../../imports/api/mongo.js';
import './filtros.html';

state = new ReactiveDict();
estadoSexo = new ReactiveDict();
// inicializa valor por defecto
//estadoSexo ='I';

Template.filtrosEstudios.helpers({
    tipoEstudio: [
        { 'id': 'PR', 'texto': 'En promoción' },
        { 'id': 'EM', 'texto': 'Embarazo' }
    ],
    tipoSexo: [
        { 'id': 'I', 'texto': ' Indiferente' },
        { 'id': 'M', 'texto': ' Masculino' },
        { 'id': 'F', 'texto': 'Femenino' }
    ]
});

// lee todos los documentos de la colleción estudios
Template.itemEstudios.helpers({
    estudios() {
 
       if (estadoSexo.get('csexo') == null ) estadoSexo.set('csexo','I');

       estadoSexoSel = estadoSexo.get('csexo');
       console.log(estadoSexoSel);

        if (state.get('cestudio') && estadoSexoSel) {
            switch (state.get('cestudio')) {
                case 'PR':
                    return Estudios.find({ 'esPromo': true, 'sexo': estadoSexoSel });
                default:
                    return Estudios.find({'sexo': estadoSexoSel});
            }
        }
        // devuelve todos sin filtros
        return Estudios.find({'sexo': estadoSexoSel});
    },
});


// onRender para codigo Jquery
Template.filtrosEstudios.onRendered(function () {
    // activa Jquery
    $('.ui.dropdown').dropdown();

    $('.filtros .button').on('click', function () {
        $('.filtros .ui.dropdown').dropdown('clear');
    });
});

Template.filtrosEstudios.events({
    // recoge selección en dropdow tipo estudio
    'change .cestudio'(event, instance) {
        event.preventDefault();
        state.set('cestudio', event.target.value);

    },

    'change .csexo'(event, instance) {
        event.preventDefault();
        estadoSexo.set('csexo', event.target.value);
       // console.log(estadoSexo.get('csexo'));
    },

    'click .ui.button'() {
        //event.preventDefault();
        state.set('selection', '');
        console.log('click en limpiar');
    }

})