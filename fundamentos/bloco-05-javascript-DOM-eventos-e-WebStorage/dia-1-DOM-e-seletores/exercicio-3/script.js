function changeColor (element, color) {
    document.querySelector(element).style.color = color;
}

function changeBGColor (element, color) {
    document.querySelector(element).style.backgroundColor = color;
}

changeBGColor("#header-container", "lightgreen");
changeBGColor(".no-emergency-tasks ", "yellow");
changeBGColor(".no-emergency-tasks h3", "black");
changeBGColor(".no-emergency-tasks div:last-child h3", "black");
changeBGColor(".emergency-tasks ", "pink");
changeBGColor(".emergency-tasks h3", "purple");
changeBGColor(".emergency-tasks div:last-child h3", "purple");
changeBGColor("footer", "green");

