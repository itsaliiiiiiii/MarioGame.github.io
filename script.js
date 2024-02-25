$(document).ready(function () {
    var container = $("#container");
    for (let index = 0; index < 9; index++) {
        container.append("<div class='pipe' id='" + index + "'" + "></div>");
    }

    var gameOn = setInterval(setMontyAndPiranha, 1000);

    var gameOver = true;
    container.click(function () {
        $("#Monty").click(function () {
            let score = parseInt($("#score").text());
            $("#score").text(score + 10)
        });
        $("#Pirhana").click(function () {
            gameOver = false;
            $('body').append('<div id="gameOver"><label>Game Over</label><label>Your Score : '+ parseInt($("#score").text()) +'</label><button id="Restart">Restart</button></div>')
        });
        if (!gameOver) {
            clearInterval(gameOn);
        }
    });
    $(document).on('click', '#Restart', function() {
        location.reload();
    });


});



// functions
function setMontyAndPiranha() {
    let randomNumbers = randomNumber();
    $(".pipe center img").remove();
    $(".pipe center").remove();

    $("#" + randomNumbers[0]).append("<center><img id ='Monty' src='img/monty-mole.png'></center>");

    $("#" + randomNumbers[1]).append("<center><img id ='Pirhana' src='img/piranha-plant.png'></center>");
}
function randomNumber() {
    let random1 = Math.floor(Math.random() * 9);
    let random2 = Math.floor(Math.random() * 9);
    return (random1 == random2) ? randomNumber() : [random1, random2];
}