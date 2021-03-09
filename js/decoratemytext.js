function makeAreaBigger() {
    var el = document.getElementById('text_area');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    el.style.fontSize = (fontSize + 2) + 'px';
}

function biggerDecoration() {
    setInterval(function(){ makeAreaBigger(); }, 500);
}

function binger(){
    let bing = document.getElementById("bing");
    let text_area = document.getElementById("text_area");

    if (bing.checked) {
        text_area.style.color = "green";
        text_area.style.fontWeight = "bold";
        text_area.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('../images/hundred_dollar_bill.jpg')";
    } else {
        text_area.style.color = "black";
        text_area.style.fontWeight = "400";
        text_area.style.textDecoration = "auto";
        document.body.style.backgroundImage = "none";
    }
    
}

// function igpayAtinlay(){
//     let textArea = document.getElementById("text_area");

//     textArea.value.split(" ").forEach(el => {
//         console.log(el.trim().toLowerCase());
//     });
// }