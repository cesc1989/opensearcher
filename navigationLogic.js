$(document).on('pageinit','#splashscreen',function(){
	getTenRecents();
	setTimeout(function(){
	  $.mobile.changePage("#mainpage", "fade");
	}, 3000);
});

$("#changeToMain").click(function(){
  getTenRecents();
  setTimeout(function(){
    console.log("cambiando a la pagina de principal");
    $.mobile.changePage("#mainpage", "fade");
  }, 3000);
});

$("#changeToQuantity").click(function(){
  console.log("pre camiando");
  setTimeout(function(){
    console.log("cambiando a la pagina de cantidad");
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