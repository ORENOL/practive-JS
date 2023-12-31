    // 자바스크립트는 한줄씩 번역하므로 뒤에 있는 id를 읽어오지 못한다. 
    // 그래서 DOMcontentLoaded로 우선 다 불러온 다음 자바스크립트를 실행한다

/* document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ah1").innerHTML = "JavaScript";
}); */

    // 화살표 함수 사용
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ah1").innerHTML = "JavaScript";
});


/* function hello() {
    console.log("hello JS!");
} */

    // 변수에 함수를 할당할 수 있음
const hello = () => {
    console.log("hello JS!!")
}

// alert("안녕하세요");

