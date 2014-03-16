$(document).ready(function(){


    /*Trayendo los mas comentados para la criteria*/
    $.getJSON("http://www.etnassoft.com/api/v1/get/?criteria=most_voted&num_items=4&callback=?",function(resultsMostVoted){

      var booksList = "";

      console.log(resultsMostVoted);

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

  });
<!-- /OPEN LIBRA JSON LOGIC -->