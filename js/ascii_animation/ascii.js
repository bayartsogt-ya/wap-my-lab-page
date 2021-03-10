'esversion: 6';

var textArea, startButton, stopButton, animationSelector, sizeSelector, setTimeOutID, turboChecker;
var animationSpeed = 250;

var initVariables = () => {
    textArea = document.getElementById("textArea");
    startButton = document.getElementById("startButton");
    stopButton = document.getElementById("stopButton");
    animationSelector = document.getElementById("animation");
    sizeSelector = document.getElementById("size");
    turboChecker = document.getElementById("turbo");

    stopButton.disabled = true;
};

window.onload = () => {
    initVariables();
    console.log("it is here");

    // -------- Set Value from Animation -------
    animationSelector.onchange = () => {
        console.log(`Selecting ${animationSelector.value}`);
        textArea.value = ANIMATIONS[animationSelector.value];
    };

    sizeSelector.onchange = () => {
        console.log(`Selecting ${sizeSelector.value}`);
        textArea.style.fontSize = sizeSelector.value;
    };

    turboChecker.onchange = () => {
        animationSpeed = turboChecker.checked ? 50 : 250;
        console.log(`Turbo Checking ${turboChecker.checked} speed: ${animationSpeed}`);
    };

    startButton.onclick = () => {
        console.log("starting");
        stopButton.disabled = false;
        startButton.disabled = true;
        animationSelector.disabled = true;

        let texts = ANIMATIONS[animationSelector.value].split("=====\n");
        let idx = 0;
        
        var displayFunction = function() {
            textArea.value = texts[idx];
            idx = (idx + 1) % texts.length;
            setTimeOutID = setTimeout(displayFunction, animationSpeed);
        };
        setTimeOutID = setTimeout(displayFunction, animationSpeed);
    };

    stopButton.onclick = () => {
        console.log("stopping");
        stopButton.disabled = true;
        startButton.disabled = false;
        animationSelector.disabled = false;
        clearTimeout(setTimeOutID);
        textArea.value = ANIMATIONS[animationSelector.value];
    };
};