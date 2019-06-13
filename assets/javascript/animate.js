// create an array of strings

var superheros = ['superman', 'batman', 'ironman', 'spiderman', 'hulk']

//loop through the array and create buttons on the page for each string

  function heroButtons() {

    $("#hero-buttons").empty();

    for (i = 0; i < superheros.length; i++) { 
      $("#hero-buttons").append("<button class ='heroButton' data-name ='" + superheros[i] + "'>" + superheros[i] + "</button>");
      }

}

$("#add-hero").on("click", function(event) {

  event.preventDefault();

  var hero = $("#hero-input").val().trim();

  superheros.push(hero);

  heroButtons();
});

heroButtons();