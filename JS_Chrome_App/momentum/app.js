
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*
function onLoginBtnClick() {
    console.log("click!!!!!!!!!");
}
*/

function onLoginBtnClick() {
    // console.log("hello", loginInput.value);
    const username = loginInput.value;
    console.log(username)
    /*
    if(username === "") {
        // console.log("Please write your name")
        alert("Please write your name")
    } else if(username.length > 15) {
        alert("Your name is too long")
    }
    */
}


loginButton.addEventListener("click", onLoginBtnClick);

/*
==
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/ 












// alert("hi");

// console.log(545454545);
// console.log("lalala");

// const a = 5;
// const b = 2;

// const myName = 'nico';

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

