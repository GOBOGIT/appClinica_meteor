// variables temporarles en cliente
import { ReactiveDict } from 'meteor/reactive-dict';
import { Estudios } from '../../../imports/api/mongo.js';
import '../../../lib/json.js';
import './filtrosEstudios.html';

state = new ReactiveDict();

Template.itemEstudios.onCreated(function(){
    state.set('btPromo', false);
        Meteor.subscribe('itemEstudios');
});


Template.filtrosEstudios.helpers({
    tipoEstudio: [
        { 'id': 'I', 'texto': 'Todos los estudios' },
        { 'id': 'EM', 'texto': 'Embarazo' }
    ],
 
    tipoSexo: function() {
        
        return listaSexo;
    }
});

// lee todos los documentos de la colleción estudios:
// itemEstudios e itemEstudiosPC
Template.registerHelper('estudios', () => {
       var arrayres;
       if (state.get('csexo') == null || state.get('csexo') == "I" ) {
           arrayres = ["H","M"];
        } else {
            arrayres = [state.get('csexo')];
      }

      if(state.get('btPromo')) {
           return Estudios.find({'sexo': { $in: arrayres }, 'esPromo': true });
        } else {
            return Estudios.find({'sexo': { $in: arrayres }, 'esPromo': { $in: [true, false]}});
        }
});


// onRender para codigo Jquery
Template.filtrosEstudios.onRendered(function () {
    // activa Jquery
    $('.ui.dropdown').dropdown();

    $('.limpiar').on('click', function () {
        $('.filtros .ui.dropdown').dropdown('clear');
    });
});

Template.filtrosEstudios.events({
    // recoge selección en dropdow tipo estudio
    'change .csexo'(event) {
        event.preventDefault();
        state.set('csexo', event.target.value);
    },
    
    'change .cestudio'(event) {
        event.preventDefault();
        state.set('cestudio', event.target.value);
    },

    'click .limpiar'(event) {
        event.preventDefault();
        state.set('selection', '');
        state.set('csexo',"I");
        state.set('cestudio', "I");
        state.set('btPromo', false);
    },

    'click .btPromo'(event) {
        event.preventDefault();
        state.set('btPromo', !state.get('btPromo'));
    }

});