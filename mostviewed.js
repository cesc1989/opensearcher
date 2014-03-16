$(document).ready(function(){


    /*Trayendo los mas vistos para la criteria*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_viewed&num_items=2&callback=?",function(resultsMostViewed){

      var booksList = "";

      console.log(resultsMostViewed);

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

  });
<!-- /OPEN LIBRA JSON LOGIC -->