var mode = 6;
//  
//  ["rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)" ,
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];
var colors = generate_colors(mode) ;
var ask = document.querySelector("#ask");
var picked_Color = pick_Color();
var message = document.querySelector("#message");
var square = document.querySelectorAll(".square");
var square = document.querySelectorAll(".square");
var clicked_color;
var h1 = document.querySelector("h2");
var reset_button = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function () {
    
    mode = 3;
    //put the last 3 boxes display to none;
    square[5].style.display = "none";
    square[4].style.display = "none";
    square[3].style.display = "none";
  
    easy.classList.add("selected");
    hard.classList.remove("selected");
    hard.classList.add("unselected")

    //fill colors array with new 3 colors
    colors = generate_colors(mode);
  
    //pick color ;
    picked_Color = pick_Color();
  
    //update ask.text-content;
    ask.textContent = picked_Color;
  
    //change colors of new 3 boxes;
    console.log(colors.length);
    for(var i=0; i<colors.length ; i++){
    square[i].style.backgroundColor = colors[i];
    }

    h1.style.background = 'steelblue';


});




hard.addEventListener("click", function () {
    mode = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    easy.classList.add("unselected");

    
    //fill colors array with new 6 colors
    colors = generate_colors(mode);
    
    //pick color ;
    picked_Color = pick_Color();

    //update ask.text-content;
    ask.textContent = picked_Color;
 
    //apply 6 colors to the boxes;
    for(var i=0; i<colors.length ; i++){
    square[i].style.backgroundColor = colors[i] ;
    square[i].style.display = "block";

    }

        h1.style.background = 'steelblue';

    
});



reset_button.addEventListener("click", function () {

    //change message string to "";
    message.textContent = "";

    //generate new colors;
    colors = generate_colors(mode);

    //change value of picked_color;
    picked_Color = pick_Color();

    // change text content of picked color showed on screen;
    ask.textContent = picked_Color;

    //change the colors of squares
    for (var i = 0; i < colors.length; i++) {
        square[i].style.background = colors[i];
    }

    // chnage background of h2;
    h1.style.backgroundColor = "steelblue";

    //change text content if play again is used;

    reset_button.textContent = "New Colors";
})

ask.textContent = picked_Color;
// message.style.color = "white";

console.log(colors.length);

for (var i = 0; i < colors.length; i++) {

    square[i].style.background = colors[i];

    //adding event listener to check the clicked color is correct or wrong;

    square[i].addEventListener("click", function () {

        clicked_color = this.style.background;

        if (clicked_color === picked_Color) {

            // ask.textContent = "you won !!";

            message.textContent = "Correct";

            Winning_color(clicked_color);

            h1.style.background = clicked_color;

            reset_button.textContent = "Play Again?";

        }

        else {

            this.style.background = "#232323";
            message.textContent = "Try Again !";
        }
    });

}


function Winning_color(color) {

    for (var i = 0; i < square.length; i++) {

        square[i].style.background = color
    }
}

function pick_Color() {

    var c = Math.floor(Math.random() * colors.length);

    return (colors[c]);
}

function generate_colors(num) {

    var ar = [];

    for (i = 0; i < num; i++) {
        var catch_color = generate_rgb();
        ar.push(catch_color);
    }

    console.log("num : " , num);

    return ar;

}

function generate_rgb() {
    var str = "rgb(";
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // rgb(r, g, b);
    var comma_space = ", "
    return ("rgb(" + String(r) + comma_space + String(g) + comma_space + String(b) + ")");

}