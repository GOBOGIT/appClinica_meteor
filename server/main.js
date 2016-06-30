import { Meteor } from 'meteor/meteor';
import { Estudios } from '../imports/api/mongo.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('estudio', function(titulo) {
   // implemetar check: https://atmospherejs.com/meteor/check
   // check(titulo, String);
    return Estudios.find({ titulo: titulo });
});

/*
Meteor.publish('detallesPC', function(titulo) {
    return Estudios.find({ titulo: titulo });
});
*/
Meteor.publish('itemEstudios', function() {
    return Estudios.find();
});

Meteor.publish('itemEstudiosPC', function() {
    return Estudios.find();
});



