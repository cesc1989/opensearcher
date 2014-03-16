$(document).ready(function(){


    /*Trayendo los 3 mas recientes agregados a open libra para la principal*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?since=last_week&num_items=10&callback=?",function(results){

      var booksList = "";

      //console.log(results);

      for(var book in results){
        // ASIGNO LOS VALORES A USAR A VARIABLES INDEPENDIENTES

        var bookTitle = results[book].title;
        var bookAuthor = results[book].author;
        var bookLanguage = results[book].language;
        var bookPages = results[book].pages;
        var bookCover = results[book].cover;
        console.log(bookCover);

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

        $("#replacerecents").html(booksList);
      }
      // booksList += "</div>";
      // console.log(html);


    });

  });
<!-- /OPEN LIBRA JSON LOGIC -->