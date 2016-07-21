import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';
import { Estudios } from '../../../imports/api/mongo.js';
import './pControlEstudios.html';

state = new ReactiveDict();
selP = new ReactiveVar();
var sel;


Template.listaPC.onCreated(function () {
    state.set('pantallaInicio', true);
    Meteor.subscribe('itemEstudios');

});

Template.detallesPC.helpers({
    selPromo: function() {
        console.log(selP.get());
        //var espA=  selPromo.get();
        if(selP.get()) 
            return true;
        else
            return false;
     //  return {
       //   esp: selPromo.get()
      //  };
    
} ,
    estudios: function() {
         // limpia la validación del formulario   
        resetForm();
        // recoge datos de la colleción según selección
       sel = Estudios.findOne({ 'titulo': state.get('seleccion') });
       selP.set(sel.esPromo);
      // state.set('esPromo', sel.esPromo);
       
       return sel;
    },

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
        // se probó console.log( $(event.target).closest('a').data('value'));
        // pero en las actulizaciones del item no refrescaba

       state.set('seleccion', $(event.target).closest('a').text());
    }
});

Template.panelControlPpalEstudios.events({
        
    'submit #formularioEstudios'(event){
 
        event.preventDefault();

      var objeto = {};

        // esta propiedad es obligatoria
          objeto.titulo = event.target.titulo.value;
          objeto.esPromo = event.target.esPromoCheck.checked;
          // propiedades opcionales
          if( event.target.descripcion.value) objeto.descripcion = event.target.descripcion.value;
          if( event.target.requisitos.value) objeto.requisitos = event.target.requisitos.value;
          if( event.target.precio.value) objeto.precio = event.target.precio.value;
         

        var setObjeto = { $set: objeto};
      
        Estudios.update(sel._id, setObjeto );
        state.set('seleccion', event.target.titulo.value) ;
        state.set('pantallaInicio', false);
       
    }
});


// activa o desactiva las opciones de promoción
Template.detallesPC.events({
    'click .sliderPromo'(event) {
      event.preventDefault();
     selP.set(selP.get())
     // state.set('esPromo', !state.get('esPromo'));
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
