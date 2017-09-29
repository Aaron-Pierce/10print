let blocks = ["╱", "╲"]; //Array of possible characters that can be used. The Double backslash is so that the second one can be escaped


let randBlock = function () {
    return "<p style='display: inline-block; margin: 0; padding: 0;'>" + blocks[Math.floor(Math.random() * 2)] + "</p>";
};
document.body.innerHTML += "<p id='calibration' style='display:inline-block'>╱<p>";
let calibrationHeight = document.getElementById("calibration").clientHeight;
let calibrationWidth = document.getElementById("calibration").clientWidth;
// alert(calibrationWidth);
let maxlines = window.innerHeight / calibrationHeight;
let maxcols = window.innerWidth / calibrationWidth;
document.body.innerHTML = "";

let iters = maxcols * maxlines * 1.15;

function run() {
    setTimeout(function () {

        document.body.innerHTML += randBlock();
        iters--;
        if (iters >= 0) run();
        else {
            // alert("running style change");
            // $("body").append("<style class='coloring'></style>");
            // $(".coloring").html("body:nth-child(" + (maxcols + 1) + "){color:red}");

        }
    }, 0);
}

run();