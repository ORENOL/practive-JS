document.addEventListener("DOMContentLoaded", () => {

});

const dice = () => {
    const adiv = document.querySelector("#adiv");

    let n = Math.floor(Math.random() * 6) + 1;

    // if (n === 1)          adiv.innerHTML = "<img src='./static/images/1.png'>"; 
    // else if (n === 2)     adiv.innerHTML = "<img src='./static/images/2.png'>"; 
    // else if (n === 3)     adiv.innerHTML = "<img src='./static/images/3.png'>"; 
    // else if (n === 4)     adiv.innerHTML = "<img src='./static/images/4.png'>"; 
    // else if (n === 5)     adiv.innerHTML = "<img src='./static/images/5.png'>"; 
    // else if (n === 6)     adiv.innerHTML = "<img src='./static/images/6.png'>"; 

    adiv.innerHTML = `<img src="./static/images/${n}.png">`;



    // const diceImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    // const whatdice = diceImages[Math.floor(Math.random() * diceImages.length)];

    // const mydice = document.createElement("img");

    // document.getElementById("adiv").append(mydice);
    // mydice.setAttribute("src",`./static/images/${whatdice}` );
    // mydice.style.width = 300;
    // mydice.style.
    

}