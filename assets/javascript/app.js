var animals = [
    "Lions",
    "Penguins",
    "Snakes",
    "Leopards"
];
var giphy = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wyzgUDBimVFKbOtXlyp9NVV61du38AtW&limit=10"
var giphy = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wyzgUDBimVFKbOtXlyp9NVV61du38AtW&limit=5"

$("#add-animal").on("click", function (event) {
    event.preventDefault();
    var newAnimal = $("#animal-input").val().trim();
    animals.push(newAnimal);
    displayButtons();
});

function displayButtons() {
    $("#buttonsblock").empty()
    for (i = 0; i < animals.length; i++) {
        var buttons = $('<button>');
        buttons.addClass("animal btn btn-danger");
        buttons.attr("data-name", animals[i])
        buttons.attr("type", "button")
        buttons.html(animals[i])
        $('#buttonsblock').append(buttons)
    }
}

function ajaxAnimal() {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=wyzgUDBimVFKbOtXlyp9NVV61du38AtW&limit=5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i=0; i<response.data.length; i++) {
            var dis = $("<img>")
            dis.attr("src", response.data[i].images.fixed_height_still.url)
            dis.attr('title', "Rating: " + response.data[i].rating);
            dis.attr('data-still', response.data[i].images.fixed_height_still.url);
            dis.attr('data-state', 'still');
            dis.addClass('gif');
            dis.attr('data-animate', response.data[i].images.fixed_height.url);
            $("#animal-view").prepend(dis)
        }
    });
}

$(document).on("click", ".animal", ajaxAnimal);
$(document).on('click', '.gif', function(){
    console.log('on click working')
var state = $(this).attr("data-state")
var animate = $(this).attr("data-animate")
var still = $(this).attr("data-still")
if ($(this).attr("data-state") === "still") {
  $(this).attr("src", animate)
  $(this).attr("data-state", "animate")
} else if
 ($(this).attr("data-state") === "animate") {
  $(this).attr("src", still)
  $(this).attr("data-state", "still")
}
});
displayButtons()

// flexbox relative and abosulute position