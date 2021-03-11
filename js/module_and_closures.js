// ------------ Task 1 ------------

// var timer = null; // stores ID of interval timer
// function rudyTimer() {
//     if (timer === null) {
//         timer = setInterval(rudy, 1000);
//     } else {
//         clearInterval(timer);
//         timer = null;
//     }
// }

var rudyTimer = (() => {
    return () => {
        timer = null;
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();

function rudy() { // called each time the timer goes off
    document.getElementById("output").innerHTML += "Rudy!";
}
// ------------ End of Task 1 ------------

// ------------ Task 2 ------------
var textArea, accountNameInput, depositInput, createNewAccountBtn;
var accountInfoList = [];

var createAccount = (accountName, deposit) => {
    return {
        'accountName': accountName,
        'deposit': deposit,
        'toString': () => {
            return `Account name: ${accountName}  Balance: ${deposit}`;
        }
    }
};

var createNewAccountBtnHandler = () => {
    let newAccount = createAccount(
        accountNameInput.value,
        depositInput.value
    );

    textArea.value = textArea.value + 
                        (accountInfoList.length === 0 ? "": "\n") +
                        newAccount.toString();

    accountInfoList.push(newAccount);
    console.log("Account Info List:", accountInfoList);
};

window.onload = () => {

    accountNameInput = document.getElementById("accountName");
    depositInput = document.getElementById("deposit");
    textArea = document.getElementById("textArea");
    createNewAccountBtn = document.getElementById("createNewAccountBtn");

    createNewAccountBtn.onclick = createNewAccountBtnHandler;
};

// ------------ End of Task 2 ------------