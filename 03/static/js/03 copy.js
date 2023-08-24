// DOM  생성 함수/상수
const domCreate = () => {
    console.log("dom 생성")

    // 요소 생성 및 연결
    const myh2 = document.createElement("h2");
    const myh2Txt = document.createTextNode("ㅎㅇ");
    myh2.appendChild(myh2Txt);
    // id = adiv인 div에 연결
    document.getElementById("adiv").append(myh2);
}

// DOM 읽기 함수/상수
const domRead = () => {
    console.log("dom 읽기")

    // DOM 내의 요소 조회
    const myh1 = document.querySelector("h1")
    console.log("innerHTML => ", myh1.innerHTML);
    console.log("innerText => ", myh1.innerText);
    console.log("textContent => ", document.querySelector("h1").textContent);
}

// DOM 수정 함수/상수
const domUpdate = () => {
    console.log("dom 수정")

    // DOM 내의 요소 조회
    const myh2 = document.querySelector("h2")
    // 태그를 적용하며 HTML를 수정
    if (myh2) {
        myh2.innerHTML = "<h3>자바스크립트 수정됨</h3>"
    }
    // 태그도 통쨰로 HTML로 수정
    // myh1.textContent = "<h3>자바스크립트 수정됨</h3>"
}

// DOM 삭제 함수/상수
const domDelete = () => {
    console.log("dom 삭제")

    // DOM 내의 요소 삭제
    const myh2 = document.querySelector("h2")

    if (myh2) {
        console.log("myh2", myh2);
        myh2.remove;
    }
}

// 버튼 생성 함수/상수
const butCreate = () => {
    console.log("버튼 생성")

    // 요소 생성 및 연결
    const mybut = document.createElement("button");
    const mybutTxt = document.createTextNode("바나나");
    mybut.appendChild(mybutTxt);
    // id = adiv인 div에 연결
    document.getElementById("adiv").append(mybut);
}