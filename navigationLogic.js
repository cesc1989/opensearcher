// Función para hacer efecto de página splash al cargar la aplicación
$(document).on('pageinit','#splashscreen',function(){
	getTenRecents();
	setTimeout(function(){
	  $.mobile.changePage("#mainpage", "fade");
	}, 3000);
});

// Con esta función, el botón Inicio en Quantity lleva a la principal
$("#changeToMain").click(function(){
  
  setTimeout(function(){
    console.log("cambiando a la pagina de principal");
    $.mobile.changePage("#mainpage", "fade");
  }, 3000);
});

// Tuve que hacer esta función porque no estaba funcionando la anterior
// de manera correcta en ambas páginas: quantity y criteria. Solo
// funcionaba en una de las dos
$("#changeToMainFromC").click(function(){
  
  setTimeout(function(){
    console.log("cambiando a la pagina de principal");
    $.mobile.changePage("#mainpage", "fade");
  }, 3000);
});

$("#changeToQuantity").click(function(){
	getTenRecents();
  setTimeout(function(){
    console.log("cambiando a la pagina de cantidad");
    $.mobile.changePage("#quantitypage", "fade");
  },2000);
});

// Tuve que hacer esta función porque no estaba funcionando la anterior
// de manera correcta en ambas páginas: quantity y criteria. Solo
// funcionaba en una de las dos
$("#changeToQuantityFromC").click(function(){
	getTenRecents();
  setTimeout(function(){
    console.log("cambiando a la pagina de cantidad desde criteria");
    $.mobile.changePage("#quantitypage", "fade");
  },2000);
});

$("#changeToCriteria").click(function(){
	getMostViewed();
	getMostCommented();
	getMostVoted();
	setTimeout(function(){
		console.log("cambiando a la pagina de criteria");
	  $.mobile.changePage("#criteriapage", "fade");
	},4000);
});

// Tuve que hacer esta función porque no estaba funcionando la anterior
// de manera correcta en ambas páginas: quantity y criteria. Solo
// funcionaba en una de las dos
$("#changeToCriteriaFromQ").click(function(){
	getMostViewed();
	getMostCommented();
	getMostVoted();
	setTimeout(function(){
		console.log("cambiando a la pagina de criteria desde cantidad");
	  $.mobile.changePage("#criteriapage", "fade");
	},4000);
});