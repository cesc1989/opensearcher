//VARIABLE GLOBLAL PARA ARMAR EL ENLACE

var enlaceAlSitio = "http://www.etnassoft.com/biblioteca/";

var url = "http://www.etnassoft.com/api/v1/get/";

//DIBUJAR PARA RESULTADOS DE BUSQUEDA
function paintSearchResults(booksFromTerm,whereToDraw){

  //variable que contendra todos los elementos del JSON
  var booksList = "";
  booksList += "<h4>Resultados</h4>"

  //inicio del recorrido sobre el JSON
  for(var bookResult in booksFromTerm){

    //asigno los valores a usar en variables independientes
    var bookTitle = booksFromTerm[bookResult].title;
    // console.log("Titulo del libro encontrado: "+bookTitle);
    var longTitle = normalize(bookTitle);
    
    // booksList += "<ul class='unstyled'>";
      booksList += "<li>";
        booksList += "<a onclick=window.open('"+enlaceAlSitio+longTitle+"','_system','location=no')>"+bookTitle+"</a>";
      booksList += "</li>";
    // booksList += "</ul>";

    $(whereToDraw).html(booksList);
  }

}

//DIBUJAR RESULTADOS PARA CATEGORIAS, CRITERIOS Y CANTIDAD
function paintBooks(booksResults, placeToDraw, titleColor){
  
  //variable que contendra todos los elementos del JSON
  var booksList = "";

      //inicio a recorrer el JSON
      for(var book in booksResults){
        
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES
        var bookTitle = booksResults[book].title;
        var bookAuthor = booksResults[book].author;
        var bookLanguage = booksResults[book].language;
        var bookPages = booksResults[book].pages;
        var bookCover = booksResults[book].cover;
        
        
        //limpieza de las urls para que sean navegables y quitar caracteres
        //extranhos como tildes, y otros
        var longTitle = normalize(bookTitle);

        //reduzco el tamanho del titulo para no romper el disenho
        if(bookTitle.length > 25) {
            var nuevoTitulo = bookTitle.substring(0,52)+"...";
        }else{
          var nuevoTitulo = bookTitle;
        }

        //reduzco el tamanho del autor del libro para no romper el disenho
        if(bookAuthor.length > 25){
          var autores = bookAuthor.substring(0,26)+"...";
        }else{
          var autores = bookAuthor;
        }

        //traduzco el idioma del libro
        if(bookLanguage == "spanish"){
          bookLanguage = "Español";
        }else if(bookLanguage == "english"){
          bookLanguage = "Inglés";
        }

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS
          booksList += "<div class=bookBox>";
            booksList += "<a onclick=window.open('"+enlaceAlSitio+longTitle+"','_system','location=no')>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColor"+titleColor+"'>"+nuevoTitulo+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+autores+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a onclick=window.open('"+enlaceAlSitio+longTitle+"','_system','location=no')>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";
        
        //escribo el resultado del JSON en el lugar correspondiente
        $(placeToDraw).html(booksList);
      }
}

// FUNCION OBTENER LOS 5 MAS RECIENTES EN DESARROLLO

function getFiveRecentsDev(){
  /*traer los 5 mas recientes en la categoria desarrollo_web*/
  $.getJSON(url+"?category=desarrollo_web&num_items=5&callback=?",function(results){
    
    //variable para determinar el sitio donde se dibujaran los valores
    place = "#replacerecentsDev";

    //variable para determinar el color que tendra el bloque del titulo del libro
    color="Green";

    //llamado a la funcion que se encarga de pintar los elementos en el html
    paintBooks(results,place,color);

  });
}

// FUNCION OBTENER LOS 5 MAS RECIENTES EN RECURSOS ACADEMICOS

function getFiveRecentsSchool(){
  /*traer los 5 mas recientes en la categoria textos-academicos-biblioteca*/
  $.getJSON(url+"?category=textos-academicos-biblioteca&num_items=5&callback=?",function(results){
    
    //variable para determinar el sitio donde se dibujaran los valores
    place = "#replacerecentsSchool";
    
    //variable para determinar el color que tendra el bloque del titulo del libro
    color="Blue";

    //llamado a la funcion que se encarga de pintar los elementos en el html
    paintBooks(results,place,color);

  });

}

// FUNCION OBTENER LOS 5 MAS RECIENTES EN DESARROLLO

function getFiveRecentsLaw(){
  /*traer los 5 mas recientes en la categoria libros_aspecotos_legales*/
  $.getJSON(url+"?category=libros_aspecotos_legales&num_items=5&callback=?",function(results){
    
    //variable para determinar el sitio donde se dibujaran los valores
    place = "#replacerecentsLaw";
    
    //variable para determinar el color que tendra el bloque del titulo del libro
    color="Orange";
    
    //llamado a la funcion que se encarga de pintar los elementos en el html
    paintBooks(results,place,color);

  });

}


// FUNCION OBTENER LAS 10 MAS RECIENTES PARA LA PAGINA CANTIDAD

function getTenRecents(){
    /*Trayendo los 10 mas recientes agregados a open libra para la pagina cantidad*/
    $.getJSON(url+"?since=last_month&num_items=10&callback=?",function(results){
      
      //variable para determinar el sitio donde se dibujaran los valores
      place = "#replacelastten";
      
      //variable para determinar el color que tendra el bloque del titulo del libro
      color="Pink";
      
      //llamado a la funcion que se encarga de pintar los elementos en el html
      paintBooks(results,place,color);

    });

  }

// FUNCION OBTENER LAS MAS VISTAS

  function getMostViewed(){
    /*Trayendo los mas vistos para la criteria*/
    $.getJSON(url+"?criteria=most_viewed&num_items=5&callback=?",function(resultsMostViewed){

      //variable para determinar el sitio donde se dibujaran los valores
      place = "#replacemostviewed";
      
      //variable para determinar el color que tendra el bloque del titulo del libro
      color="Yellow";
      
      //llamado a la funcion que se encarga de pintar los elementos en el html
      paintBooks(resultsMostViewed,place,color);

    });

  }


// FUNCINO OBTENER LAS MAS COMENTADAS

  function getMostCommented(){

    /*Trayendo los mas comentados para la criteria*/
    $.getJSON(url+"?criteria=most_commented&num_items=5&order=z_a&callback=?",function(resultsMostCommented){

      //variable para determinar el sitio donde se dibujaran los valores
      place = "#replacemostcommented";
      
      //variable para determinar el color que tendra el bloque del titulo del libro
      color="Red";
      
      //llamado a la funcion que se encarga de pintar los elementos en el html
      paintBooks(resultsMostCommented,place,color);

    });

  }


// FUNCION OBTENER LAS MAS VOTADAS
  function getMostVoted(){
    /*Trayendo los mas comentados para la criteria*/
    $.getJSON(url+"?criteria=most_voted&num_items=5&callback=?",function(resultsMostVoted){

      //variable para determinar el sitio donde se dibujaran los valores
      place = "#replacemostvoted";
      
      //variable para determinar el color que tendra el bloque del titulo del libro
      color="Purple";
      
      //llamado a la funcion que se encarga de pintar los elementos en el html
      paintBooks(resultsMostVoted,place,color);

    });

  }


//FUNCION PARA BUSCAR LIBROS
function searchTerm(terms,lugar){
  $.getJSON(url+"?keyword="+terms+"&category=all&order=newest&lang=all&callback=?",function(resultSearch){
    // console.log("Tamano: "+resultSearch.length);

    //si no hay resultados, se muestra un mensaje
    if(resultSearch.length == 0){
      // console.log("No hay nada que ver");
      $("#panel-content").html("<h4>Sin resultados</h4>");
    }else{
      //llamado a la funcion que dibuja los resultados
      paintSearchResults(resultSearch,lugar);
    }
  });
}

//BOTON QUE ACTIVA LA BUSQUEDA

function startSearch(termino,lugar){
  var donde = lugar;
  var terminos_de_busqueda = termino;
  
  //elimino los espacios en mas de dos palabras y los cambio por el signo +
  //la api lo exige asi
  terminos_de_busqueda = terminos_de_busqueda.split(' ').join("+");
  // console.log(terminos_de_busqueda, donde);
  //envio el termino de busqueda a la funcion que hace el llamado
  searchTerm(terminos_de_busqueda,donde);
  
}

