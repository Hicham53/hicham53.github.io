let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon1.png') {
        myImage.setAttribute('src', 'images/firefox-icon2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon1.png');
    }
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');


/*When i run this example i get the dialog box that prompts me to enter
my user name, and when i pressing the Cancel button.
i end up with a title that reads Mozilla is cool, null.
This happens because—when i cancel the prompt—the value is set as null.
Null is a special value in JavaScript that refers to the absence of a value.*/

// function setUserName() {
//     let myName = prompt('Please enter your name: ');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is Cool, ' + myName;
// }
// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Yes This Is YourName, ' + storedName;
// }


function setUserName() {
    let thisName = prompt('Please enter your name.');
    if (!thisName) {
        setUserName();
    } else {
        localStorage.setItem('name', thisName);
        heading.textContent = 'Mozilla is cool, ' + thisName;
    }
}

button.onclick = function () {
    setUserName();
}
