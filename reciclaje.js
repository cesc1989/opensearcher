/* */
var termino = "589";
$.getJSON("http://www.etnassoft.com/api/v1/get/?id="+termino+"&callback=?", function(results){
    $("#resultado").html(results[0].title+'<br />'+results[0].author+'<br />'+results[0].language+'<br />'+results[0].pages);
    $("<img/>",{
        'src':results[0].cover
    }).appendTo('#resultado');
});

    /* ultimos 10 publicados para la seccion cantidad*/
$.getJSON("http://www.etnassoft.com/api/v1/get/?newest&num_items=10&callback=?",function(results){
    for(var i = 0; i <= results[0].length; i++){
        // console.log(results[i]);
        $('div/>',{
            html: results[i].title
        }).appendTo("#cantidadPublicados");
    }
});

$("#resultado1").html(results[1].title+'<br />'+results[1].author+'<br />'+results[1].language+'<br />'+results[1].pages);
      $("<img/>",{
        'src':results[1].cover
      }).appendTo('#resultado1');

      $("#resultado2").html(results[2].title+'<br />'+results[2].author+'<br />'+results[2].language+'<br />'+results[2].pages);
      $("<img/>",{
        'src':results[2].cover
      }).appendTo('#resultado2');

      results[0].title+'<br />'+results[0].author+'<br />'+results[0].language+'<br />'+results[0].pages;

      function functinoName(){}