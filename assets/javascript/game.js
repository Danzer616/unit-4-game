var random_result;
var win = 0;
var lost = 0;
var previous = 0;

//event delegation

var resetAndStart = function () {

    $(".crystals").empty();

        var images = 
        ["https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719",
         "https://banner2.kisspng.com/20171127/633/red-crystal-transparent-png-clip-art-image-5a1c767d09e7c1.8275534515118147810406.jpg", 
         "https://mbtskoudsalg.com/images/jewel-clipart-emerald-stone-1.png", 
         "http://numeroastro.com/wp-content/uploads/2018/01/yellow-crystal-ball-1.jpg"]

        random_result = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#result").html("Random Result: " + random_result);
        for (let i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);


        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });   
        
        $(".crystals").append(crystal);

    
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_result) {
        
        lost++;
        
        $("#lost").html("You lost: " + lost);
        console.log(lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {
        win++;
        
        $("#win").html("You win!: " + win);

        previous = 0;

        resetAndStart();
    }


});






// "Crystal Collector!" is a game that involves 4 crystals.
// Every crystal must generate a random number between 1-12.
// Each game, the computer will generate one random number betweem 19-120.
// Per each crystal, a new random number should generate everytime we win or lose (between 1-12.)
// When clicking any of the crystals, it should be adding with the number of the previous crystal until the 
// number either matches the random generated number (winning) or if it has gone over the generated number (losing.)
// Rules section (image provides details)