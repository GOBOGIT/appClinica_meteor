import { Estudios } from '../../../imports/api/mongo.js';
import './estudios.html';

Template.estudio.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('estudio', FlowRouter.getParam('titulo'));
    });
});

Template.estudio.helpers({
    estudios() {
       return Estudios.findOne({ 'titulo': FlowRouter.getParam('titulo') });
    }
});