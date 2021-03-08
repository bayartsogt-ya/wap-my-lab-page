function tip_calculator(){
    let subtotal = document.getElementById("subtotal").value;
    let tip = document.getElementById("tip").value;

    // creating the answer
    let answer = eval(`${subtotal} * (${tip} / 100)`);
    answer = Math.round(answer * 100) / 100;

    document.getElementById("your_total").innerHTML = `$${answer}`;
}