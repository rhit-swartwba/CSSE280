main = function() {
    console.log("Ready");
   

    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };

    document.querySelector("#redButton").onclick = (event) => {
        console.log("Color button is red");
        updateColor("red");
    }

    document.querySelector("#blueButton").onclick = (event) => {
        console.log("Color button is blue");
        updateColor("blue");
    }

    document.querySelector("#purpleButton").onclick = (event) => {
        console.log("Color button is purple");
        updateColor("purple");
    }

    document.querySelector("#orangeButton").onclick = (event) => {
        console.log("Color button is orange");
        updateColor("orange");
    }
}

updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`
}

updateColor = function(newColor) {
    document.querySelector("#textColorBox").style.backgroundColor=newColor;
    document.querySelector("#textColorBox").innerHTML = `${newColor}`;
}

let counter = 0;

main();