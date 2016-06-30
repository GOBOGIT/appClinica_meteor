// ruta en root
// layout es el template base donde se va a inyectar el template incluido en "main"
FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'inicio', { cabeceraSel: 'cabeceraInicio',  }); 
  }
});

// rutas estudios
FlowRouter.route( '/estudios', {
  action: function() {
    BlazeLayout.render( 'estudiosPpal',  {  cabeceraSel: 'cabeceraSmall', main:'estudiosTodos' }); 
  }
});

FlowRouter.route( '/estudios/:titulo', {
  action: function() {
    BlazeLayout.render( 'estudiosPpal',  {  cabeceraSel: 'cabeceraSmall', main:'estudio'  }); 
  }
});


// rutas clinicas
FlowRouter.route( '/clinicas', {
  action: function() {
    BlazeLayout.render( 'clinicas',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  }
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



// rutas panel de Control
FlowRouter.route( '/panelControl', {
  action: function() {
    BlazeLayout.render( 'panelControlPpal',  {  cabeceraSel: 'cabeceraPC' }); 
  }
});


