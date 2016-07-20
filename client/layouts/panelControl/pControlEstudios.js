import { ReactiveDict } from 'meteor/reactive-dict';
import { Estudios } from '../../../imports/api/mongo.js';
import './pControlEstudios.html';

state = new ReactiveDict();

var sel;

Template.listaPC.onCreated(function () {
 //   state.set('btPromo', false);
    state.set('pantallaInicio', true);

    Meteor.subscribe('itemEstudios');
});

Template.detallesPC.helpers({
    selPromo() {
        return state.get('esPromo');
    },

    estudios() {
         // limpia la validación del formulario   
        resetForm();
        // recoge datos de la colleción según selección
       sel = Estudios.findOne({ 'titulo': state.get('seleccion') });
        state.set('esPromo', sel.esPromo);
        return sel;
    }
});

Template.panelControlPpalEstudios.helpers({
    pantallaInicio() {
        return state.get('pantallaInicio');
    }
});

Template.listaPC.events({
    // recoge selección en dropdow tipo estudio
    'click .selPC'(event) {
        event.preventDefault();
        state.set('pantallaInicio', false);
        state.set('seleccion', $(event.target).closest('a').data('value'));
    }
});

Template.panelControlPpalEstudios.events({
    // 'submit #formularioEstudios'(event){
        
    'submit #formularioEstudios'(event){
        
      //  console.log(state.get('esPromo'));
        Estudios.update(sel._id, {
            $set: { 
            'titulo':  event.target.titulo.value
      },
        });
        event.preventDefault();
        state.set('pantallaInicio', false);
        state.set('seleccion',event.target.titulo.value) ;
    }
});


// activa o desactiva las opciones de promoción
Template.detallesPC.events({
    'submit .sliderPromo'(event) {
        event.preventDefault();
        
        state.set('esPromo', !state.get('esPromo'));
    }
});

function resetForm() {
  var form = $('#formularioEstudios');
  form.form('reset');
  form.form('clear');
  // remove the error class so it wont show error msg ( semantic-ui bug ? )
  form.removeClass('error');
}

//********** VALIDACION

Template.detallesPC.onRendered(function () {
    
    $('.ui.form')
        .form({
            fields: {
                titulo: {
                    identifier: 'titulo',
                    rules: [{
                        type: "empty"
                    }]
                },
                validoHasta: {
                    identifier: 'validoHasta',
                    optional: true,
                    rules: [{
                        type: "regExp[/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d$/]"
                    }]
                },
                validoDesde: {
                    identifier: 'validoDesde',
                    optional: true,
                    rules: [{
                        type: "regExp[/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d$/]"
                    }]
                },
                promoValidoHasta: {
                    identifier: 'promoValidoHasta',
                    optional: true,
                    rules: [{
                        type: "regExp[/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d$/]"
                    }]
                },
                precioPromo: {
                    identifier: 'precioPromo',
                    optional: true,
                    rules: [{
                        type: "number"
                    }]
                },
                precio: {
                    identifier: 'precio',
                    optional: true,
                    rules: [{
                        type: "number"
                    }]
                },
            }
        });
});
