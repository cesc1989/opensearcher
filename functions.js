// FUNCION OBTENER LAS 10 MAS RECIENTES

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

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div>";
            booksList += "<h3>"+bookTitle+"</h3>";
            booksList += "<div class='booksListImage'>";
              booksList += "<img src="+bookCover+"></img>";
            booksList += "</div>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p>Autor: "+bookAuthor+"</p>";
              booksList += "<p>Idioma: "+bookLanguage+"</p>";
              booksList += "<p>Paginas: "+bookPages+"</p>";
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

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div>";
            booksList += "<h3>"+bookTitle+"</h3>";
            booksList += "<div class='booksListImage'>";
              booksList += "<img src="+bookCover+"></img>";
            booksList += "</div>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p>Autor: "+bookAuthor+"</p>";
              booksList += "<p>Idioma: "+bookLanguage+"</p>";
              booksList += "<p>Paginas: "+bookPages+"</p>";
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

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div>";
            booksList += "<h3>"+bookTitle+"</h3>";
            booksList += "<div class='booksListImage'>";
              booksList += "<img src="+bookCover+"></img>";
            booksList += "</div>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p>Autor: "+bookAuthor+"</p>";
              booksList += "<p>Idioma: "+bookLanguage+"</p>";
              booksList += "<p>Paginas: "+bookPages+"</p>";
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

        // COMIENZO A DIBUJAR LOS ELEMENTOS OBTENIDOS

          booksList += "<div>";
            booksList += "<h3>"+bookTitle+"</h3>";
            booksList += "<div class='booksListImage'>";
              booksList += "<img src="+bookCover+"></img>";
            booksList += "</div>";
            booksList += "<div class='booksListInfo'>";
              booksList += "<p>Autor: "+bookAuthor+"</p>";
              booksList += "<p>Idioma: "+bookLanguage+"</p>";
              booksList += "<p>Paginas: "+bookPages+"</p>";
            booksList += "</div>";
          booksList += "</div>";

        $("#replacemostvoted").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);
    });

  }