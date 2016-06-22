import './cabecera.html';

Template.cabeceraSmall.helpers({

// spaceBars devuelve el valor seccion y lo refresa a secc
// urlDir seccion (parametro)
urlDir : function(secc){
  var estadoUrl = FlowRouter.getRouteName();
  return estadoUrl === secc;
},

secciones: [
   { seccion: 'inicio', url:'/' },
   { seccion: 'estudios', url:'/estudios' },
   { seccion: 'clinicas', url:'/clinicas' },
   { seccion: 'avisos', url:'/avisos' },
  ],

});

Template.cabeceraSmall.onRendered(function(){
  this.$('.ui.sticky')
  .sticky({
    context: '#contenido'
  });
});