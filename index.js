
const box = document.getElementsByClassName("box")[0];


function Numbergenerator() {
    var randomnumber = Math.floor(Math.random() * 6) + 1;

    console.log(box.innerHTML)
    console.log(randomnumber);
    switch (randomnumber.toString()) {
        case "1":
            box.innerHTML = "A";
            console.log("working");
            break;
        case "2":
            box.innerHTML = "B";
            console.log("working");
            break;
        case "3":
            box.innerHTML = "C";
            console.log("working");
            break;
        case "4":
            box.innerHTML = "D";
            console.log("working");
            break;
        case "5":
            box.innerHTML = "E";
            console.log("working");
            break;
        case "6":
            box.innerHTML = "F";
            console.log("working");
            break;

    }

}

// function for calling Numbergenerator
Numbergenerator();



// ---------------------------************************************--------------------------------------------


// when mouse is click on Buttons
var size = document.querySelectorAll(".images").length;
for (var i = 0; i < size; i++) {
    document.querySelectorAll(".images")[i].addEventListener("click", function () {
        var key = this.innerHTML;      /* this key word is use for object */
        // console.log(key);

        makesound(key.toLowerCase());       /* switch case are in lower latters so used tolowercase here */
    })

}

// when keyboard is pressed
document.addEventListener("keypress", function (event) {
  
    makesound(event.key);
    // console.log(event.key);
})


function bodychange() {
    const body = document.querySelector("body");
    body.innerHTML = '<div class="jumbotron jumbotron-fluid ">' +
        '<div class="container">' +
        '<h1 class="display-4">Opps Failed !</h1>' +
        '<p class="lead">Sorry you had make mistake please try again </p>' +
        '</div>' +
        '</div>';

      
 }
 

function makesound(word) {
    if (word.toUpperCase() != box.innerHTML) {
        console.log("You had make a Mistake")
        bodychange();
    }

    else {
        switch (word) {
            case "a":
                var sound1 = new Audio("sounds/198040__novasoundtechnology__tambomidas-tambourine-snare-drum-nova-sound.wav");
                sound1.play()
                console.log("A is clicked")
                Numbergenerator();
                break;
            case "b":
                var sound2 = new Audio("sounds/347129__novasoundtechnology__power-motion-kick-drum-nova-sound.wav");
                sound2.play()
                console.log("B is clicked")
                Numbergenerator();
                break;
            case "c":
                var sound3 = new Audio("sounds/488459__trvth__bass1drum.wav");
                sound3.play()
                console.log("C is clicked")
                Numbergenerator();
                break;
            case "d":
                var sound4 = new Audio("sounds/488458__trvth__crash1drum.wav");
                sound4.play()
                console.log("D is clicked")
                Numbergenerator();
                break;
            case "e":
                var sound5 = new Audio("sounds/250533__waveplaysfx__drums-short-snare.wav");
                sound5.play()
                console.log("E is clicked")
                Numbergenerator();
                break;
            case "f":
                var sound6 = new Audio("sounds/488466__trvth__snare1drum.wav");
                sound6.play()
                console.log("F is clicked")
                Numbergenerator();
                break;

            default:
                console.log("Another key pressed")
                Numbergenerator();
                break;
        }
    }
}