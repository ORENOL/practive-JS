document.addEventListener("DOMContentLoaded", () => {
    
    // // 한번에 버튼 가져오기
    // const bts = document.querySelectorAll("button");

    // // 6개의 버튼을 각각 다루도록 만듦
    // bts.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         dice2(parseInt(item.textContent)); // parseInt 문자를 숫자로 변환시켜줌
        
    //     // 관리자 도구 로그 띄우기
    //     console.log(item.textContent);
    // });
    //         }) ;

    // 확인 버튼 만들기
    const bt = document.querySelector("button");
    const radios = document.querySelectorAll("input");
    bt.addEventListener("click", () => {
        for(let item of radios){
            if (item.checked) {
                console.log(item.value);
                dice2(parseInt(item.value));
                // foreach()는 break 불가능
                break;
            }
        }    
    });
});
// 주사위 보기
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

// 주사위 맞추기
const dice2 = (i) => {
    let n = Math.floor(Math.random() * 6) + 1 ;

    // const adiV = document.getElementById("adiv")
    const adiv = document.querySelector("#adiv");
    adiv.innerHTML = `<img src='./static/images/${n}.png'>` ;


    const h2 = document.querySelector("hgroup > h2");
    
    // == 두개는 값 비교, === 세개는 값과 타입 비교

    if (n===i) {
        h2.textContent = "맞춤" ;
        h2.computedStyleMap.color = "blue";
    }
    else {
        h2.textContent = "못맞춤"
        h2.computedStyleMap.color = "red";
    }
    
}