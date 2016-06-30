// ruta en root
// layout es el template base donde se va a inyectar el template incluido en "main"
FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'inicio', {
        cabeceraSel: 'cabeceraInicio',
    }); 
  }, name: 'inicio'
});

FlowRouter.route( '/estudios', {
  action: function() {
    BlazeLayout.render( 'estudios',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  }, name: 'estudios'
});

FlowRouter.route( '/clinicas', {
  action: function() {
    BlazeLayout.render( 'clinicas',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  }, name: 'clinicas'
});

FlowRouter.route( '/estudio', {
  action: function() {
    BlazeLayout.render( 'estudio',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  },name: 'estudio'
});

FlowRouter.route( '/clinica', {
  action: function() {
    BlazeLayout.render( 'clinica',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  }, name: 'clinica'
});

FlowRouter.route( '/avisos', {
  action: function() {
    BlazeLayout.render( 'avisos',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  }, name: 'avisos'
});


FlowRouter.route( '/panelControl', {
  action: function() {
    BlazeLayout.render( 'panelControl',  {
        cabeceraSel: 'cabeceraPC'
    }); 
  },
  name: 'panelControl'
});

