//funcion para mostrar el indicador de carga
function showIndicator(){
	$.mobile.loading( 'show', {
	    text: 'Cargando...',
	    textVisible: true,
	    theme: 'b',
	    html: ""
	 });
}

// Función para hacer efecto de página splash al cargar la aplicación
$(document).on('pageinit','#splashscreen',function(){
	 $.mobile.changePage("#mainpage", "fade");
});

// Con esta función, el botón Inicio en Quantity lleva a la principal
$("#changeToMain").click(function(){
	showIndicator();
 
    console.log("cambiando a la pagina de principal");
    $.mobile.changePage("#mainpage", "fade");
  
});

// Tuve que hacer esta función porque no estaba funcionando la anterior
// de manera correcta en ambas páginas: quantity y criteria. Solo
// funcionaba en una de las dos
$("#changeToMainFromC").click(function(){
	showIndicator();
  
    console.log("cambiando a la pagina de principal");
    $.mobile.changePage("#mainpage", "fade");
 
});

$("#changeToQuantity").click(function(){
	showIndicator();
  
    console.log("cambiando a la pagina de cantidad");
    $.mobile.changePage("#quantitypage", "fade");
  
});

// Tuve que hacer esta función porque no estaba funcionando la anterior
// de manera correcta en ambas páginas: quantity y criteria. Solo
// funcionaba en una de las dos
$("#changeToQuantityFromC").click(function(){
	showIndicator();
  
    console.log("cambiando a la pagina de cantidad desde criteria");
    $.mobile.changePage("#quantitypage", "fade");
  
});

$("#changeToCriteria").click(function(){
	showIndicator();
	
	console.log("cambiando a la pagina de criteria");
	  $.mobile.changePage("#criteriapage", "fade");
	
});

// Tuve que hacer esta función porque no estaba funcionando la anterior
// de manera correcta en ambas páginas: quantity y criteria. Solo
// funcionaba en una de las dos
$("#changeToCriteriaFromQ").click(function(){
	showIndicator();
	console.log("cambiando a la pagina de criteria desde cantidad");
  	$.mobile.changePage("#criteriapage", "fade");
});


//FUNCION PARA CARGAR LOS ELEMENTOS DE LA PRINCIPAL CUANDO SE HACE RELOAD

$("#mainpage").on("pageshow", function(event){
	var spinner = new Spinner(opts).spin(target);
	getFiveRecentsDev();
	getFiveRecentsSchool();
	getFiveRecentsLaw();
	
});

$("#quantitypage").on("pageshow", function(event){
	var spinner = new Spinner(opts).spin(targetLT);
	getTenRecents();
});

$("#criteriapage").on("pageshow", function(event){
	var spinner = new Spinner(opts).spin(targetCP);
	
	getMostViewed();
	getMostCommented();
	getMostVoted();
});

//cerrar aplicacion
function closeApp(){
	navigator.notification.confirm(
        '¿Quieres cerrar la aplicación?',  // message
        exitFromApp,              // callback to invoke with index of button pressed
        'Cerrar Aplicación',            // title
        'Cancelar,Sí'         // buttonLabels
    );
}

function exitFromApp(buttonIndex){
	if (buttonIndex==2){
       navigator.app.exitApp();
    }
}