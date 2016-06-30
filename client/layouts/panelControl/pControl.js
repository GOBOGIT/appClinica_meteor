import { ReactiveDict } from 'meteor/reactive-dict';
import { Estudios } from '../../../imports/api/mongo.js';
import './pControl.html';

state = new ReactiveDict();

Template.itemEstudiosPC.onCreated(function () {
    state.set('btPromo', false);
    state.set('pantallaInicio', true);

    Meteor.subscribe('itemEstudios');
});

Template.detallesPC.helpers({
    estudios() {
        return Estudios.findOne({ 'titulo': state.get('seleccion') });
    }
});

Template.panelControlPpal.helpers({
    pantallaInicio() {
        return state.get('pantallaInicio');
    }
});

Template.itemEstudiosPC.events({
    // recoge selección en dropdow tipo estudio
    'click .selPC'(event) {
        event.preventDefault();
        state.set('pantallaInicio', false);
        state.set('seleccion', $(event.target).closest('a').data('value'));
    }
});


/*
Template.detallesPC.events({
    'click .sliderPromo'(event) {
        event.preventDefault();

        console.log("entra");

    }
});
*/

