//VARIABLE GLOBLAL PARA ARMAR EL ENLACE

var enlaceAlSitio = "http://www.etnassoft.com/biblioteca/";

function paintBooks(booksResults, placeToDraw, titleColor){
  
  //variable que contendra todos los elementos del JSON
  var booksList = "";
      
      //console.log(results);

      //inicio a recorrer el JSON
      for(var book in booksResults){
        
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES
        var bookTitle = booksResults[book].title;
        var bookAuthor = booksResults[book].author;
        var bookLanguage = booksResults[book].language;
        var bookPages = booksResults[book].pages;
        var bookCover = booksResults[book].cover;
        
        //console.log(bookCover);
        //console.log(nuevoTitulo);
        
        //limpieza de las urls para que sean navegables y quitar caracteres
        //extranhos como tildes, y otros
        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS
          booksList += "<div class=bookBox>";
            booksList += "<a onclick=window.open('"+enlaceAlSitio+nuevoTitulo+"','_blank','location=system')>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColor"+titleColor+"'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a onclick=window.open('"+enlaceAlSitio+nuevoTitulo+"','_blank','location=system')>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";
        
        //escribo el resultado del JSON en el lugar correspondiente
        $(placeToDraw).html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);
}

// FUNCION OBTENER LOS 5 MAS RECIENTES EN DESARROLLO

function getFiveRecentsDev(){
  /*traer los 5 mas recientes en la categoria desarrollo_web*/
  $.getJSON("http://www.etnassoft.com/api/v1/get/?category=desarrollo_web&num_items=5&callback=?",function(results){
    
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
  $.getJSON("http://www.etnassoft.com/api/v1/get/?category=textos-academicos-biblioteca&num_items=5&callback=?",function(results){
    
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
  $.getJSON("http://www.etnassoft.com/api/v1/get/?category=libros_aspecotos_legales&num_items=5&callback=?",function(results){
    
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
    $.getJSON("http://www.etnassoft.com/api/v1/get/?since=last_month&num_items=10&callback=?",function(results){
      
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
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_viewed&num_items=2&callback=?",function(resultsMostViewed){

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
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_commented&num_items=3&order=z_a&callback=?",function(resultsMostCommented){

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
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_voted&num_items=4&callback=?",function(resultsMostVoted){

      //variable para determinar el sitio donde se dibujaran los valores
      place = "#replacemostvoted";
      
      //variable para determinar el color que tendra el bloque del titulo del libro
      color="Purple";
      
      //llamado a la funcion que se encarga de pintar los elementos en el html
      paintBooks(resultsMostVoted,place,color);

    });

  }