//VARIABLE GLOBLAL PARA ARMAR EL ENLACE

var enlaceAlSitio = "http://www.etnassoft.com/biblioteca/";

// FUNCION OBTENER LOS 5 MAS RECIENTES EN DESARROLLO

function getFiveRecentsDev(){
  /*traer los 5 mas recientes en la categoria desarrollo_web*/
  $.getJSON("http://www.etnassoft.com/api/v1/get/?category=desarrollo_web&num_items=5&callback=?",function(results){

    var booksList = "";

      //console.log(results);

      for(var book in results){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = results[book].title;
        var bookAuthor = results[book].author;
        var bookLanguage = results[book].language;
        var bookPages = results[book].pages;
        var bookCover = results[book].cover;
        //console.log(bookCover);

        //var nuevoTitulo = bookTitle.replace(/\s/g,"-").replace(/ñ/ig,"n").toLowerCase();
        //console.log(nuevoTitulo);
        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorGreen'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacerecentsDev").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);

  });

}

// FUNCION OBTENER LOS 5 MAS RECIENTES EN RECURSOS ACADEMICOS

function getFiveRecentsSchool(){
  /*traer los 5 mas recientes en la categoria textos-academicos-biblioteca*/
  $.getJSON("http://www.etnassoft.com/api/v1/get/?category=textos-academicos-biblioteca&num_items=5&callback=?",function(results){

    var booksList = "";

      //console.log(results);

      for(var book in results){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = results[book].title;
        var bookAuthor = results[book].author;
        var bookLanguage = results[book].language;
        var bookPages = results[book].pages;
        var bookCover = results[book].cover;
        //console.log(bookCover);

        //var nuevoTitulo = bookTitle.replace(/\s/g,"-").replace(/ñ/ig,"n").toLowerCase();

        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorBlue'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacerecentsSchool").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);

  });

}

// FUNCION OBTENER LOS 5 MAS RECIENTES EN DESARROLLO

function getFiveRecentsLaw(){
  /*traer los 5 mas recientes en la categoria libros_aspecotos_legales*/
  $.getJSON("http://www.etnassoft.com/api/v1/get/?category=libros_aspecotos_legales&num_items=5&callback=?",function(results){

    var booksList = "";

      //console.log(results);

      for(var book in results){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = results[book].title;
        var bookAuthor = results[book].author;
        var bookLanguage = results[book].language;
        var bookPages = results[book].pages;
        var bookCover = results[book].cover;
        //console.log(bookCover);

        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorOrange'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacerecentsLaw").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);

  });

}


// FUNCION OBTENER LAS 10 MAS RECIENTES PARA LA PAGINA CANTIDAD

function getTenRecents(){
    /*Trayendo los 10 mas recientes agregados a open libra para la pagina cantidad*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?since=last_month&num_items=10&callback=?",function(results){

      var booksList = "";

      //console.log(results);

      for(var book in results){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = results[book].title;
        var bookAuthor = results[book].author;
        var bookLanguage = results[book].language;
        var bookPages = results[book].pages;
        var bookCover = results[book].cover;
        //console.log(bookCover);

        var nuevoTitulo = normalize(bookTitle);


        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorPink'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacelastten").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);

    });

  }

// FUNCION OBTENER LAS MAS VISTAS

  function getMostViewed(){
    /*Trayendo los mas vistos para la criteria*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_viewed&num_items=2&callback=?",function(resultsMostViewed){

      var booksList = "";

      //console.log(resultsMostViewed);

      for(var book in resultsMostViewed){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = resultsMostViewed[book].title;
        var bookAuthor = resultsMostViewed[book].author;
        var bookLanguage = resultsMostViewed[book].language;
        var bookPages = resultsMostViewed[book].pages;
        var bookCover = resultsMostViewed[book].cover;
        // console.log(bookCover);

        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorYellow'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacemostviewed").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);

    });

  }


// FUNCINO OBTENER LAS MAS COMENTADAS

  function getMostCommented(){

    /*Trayendo los mas comentados para la criteria*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_commented&num_items=3&order=z_a&callback=?",function(resultsMostCommented){

      var booksList = "";

      //console.log(resultsMostCommented);

      for(var book in resultsMostCommented){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = resultsMostCommented[book].title;
        var bookAuthor = resultsMostCommented[book].author;
        var bookLanguage = resultsMostCommented[book].language;
        var bookPages = resultsMostCommented[book].pages;
        var bookCover = resultsMostCommented[book].cover;
        // console.log(bookCover);

        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorRed'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacemostcommented").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);
    });

  }


// FUNCION OBTENER LAS MAS VOTADAS
  function getMostVoted(){
    /*Trayendo los mas comentados para la criteria*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_voted&num_items=4&callback=?",function(resultsMostVoted){

      var booksList = "";

      //console.log(resultsMostVoted);

      for(var book in resultsMostVoted){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = resultsMostVoted[book].title;
        var bookAuthor = resultsMostVoted[book].author;
        var bookLanguage = resultsMostVoted[book].language;
        var bookPages = resultsMostVoted[book].pages;
        var bookCover = resultsMostVoted[book].cover;
        // console.log(bookCover);

        var nuevoTitulo = normalize(bookTitle);

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div class=bookBox>";
            booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
              booksList +="<h3 class='bookBoxTitleBook  bookBoxTitleBookColorPurple'>"+bookTitle+"</h3>";
            booksList +="</a>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p><strong>Autor:</strong> "+bookAuthor+"</p>";
              booksList += "<p><strong>Idioma:</strong> "+bookLanguage+"</p>";
              booksList += "<p><strong>Páginas:</strong> "+bookPages+"</p>";
            booksList += "</div>";
            booksList += "<div class='booksListImage'>";
              booksList += "<a href="+enlaceAlSitio+nuevoTitulo+" target=_blank>";
                booksList += "<img src="+bookCover+"></img>";
              booksList +="</a>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacemostvoted").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);
    });

  }