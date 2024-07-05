const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cute-dog")
        myImage.setAttribute("src", "images/cute-dog-2.png");
    else
        myImage.setAttribute("src", "images/cute-dog");
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = null;
    
    while (!myName) {
        myName = prompt("Please enter your name.");
    }

    localStorage.setItem("name", myName);
    myHeading.textContent = `Isn't it the cutest doggo ever, ${myName} ?`;
}

if (localStorage.getItem("name") === null)
    setUserName();
else
    myHeading.textContent = `Isn't it the cutest doggo ever, ${localStorage.getItem("name")} ?`;

window.addEventListener("load", localStorage.clear());
myButton.onclick = () => setUserName();