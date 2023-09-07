// 전역 변수
let arr = [];
// 초기화
const init = (but) => {
    but.forEach(items => {
        let n = items.getAttribute("id").slice(0,1)
        items.textContent = n;
    });
};


document.addEventListener("DOMContentLoaded", () => {
    const h2 = document.querySelector("h2");
    const but = document.querySelectorAll(".bt")
  
    init(but)
    but.forEach(item => {
        item.addEventListener('click', () => {
            let idx = parseInt(item.textContent);
            if (arr.length == 0) alert("폭탄을 섞어주세요.");
            else {
            if (isNaN(idx)) {
                return;
            } else{
                let num = arr.pop();
                console.log(num);
                if (num != 9) {
                   item.innerHTML= "<img src='./static/images/hart.png'>";
                } else if (arr.length == 1 & num == 9) {
                    item.   innerHTML= "<img src='./static/images/hart.png'>";
                    alert("Clear!");
                } else {
                    item.innerHTML= "<img src='./static/images/boom.png' width='90%'>";
                    arr = [];
                    h2.textContent = "Boom!";
                }
                console.log(arr);
        }}
        });
    })

    const st = document.querySelector('button');
    st.addEventListener('click', () => {
        init(but);
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        arr = arr.sort(() => Math.random()-0.5);
        console.log(arr);
        h2.textContent = "시작!";
        h2.style.color = 'blue';
        
    });
 
    // 문제점
    // 이미 누른 곳 다시 누를 수 있음 // 해결됨 -> if(isNaN(parseInt(item.textContent)))
    // 마지막에 위치한 폭탄이 하트로 안 바뀜 // 해결됨 -> else if (arr.length = 1 & num == 9)
    // 폭탄 섞기를 눌러도 이미지 초기화가 안됨  // 해결됨 -> textContent = "박스 숫자"
    // 폭탄 이미지의 크기가 박스를 벗어남  // 해결됨 -> width='90%'

       

});