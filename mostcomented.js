$(document).ready(function(){


    /*Trayendo los mas comentados para la criteria*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_commented&num_items=3&order=z_a&callback=?",function(resultsMostCommented){

      var booksList = "";

      console.log(resultsMostCommented);

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

  });
<!-- /OPEN LIBRA JSON LOGIC -->