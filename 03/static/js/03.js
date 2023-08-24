document.addEventListener("DOMContentLoaded", () => {
 
    // #id로 찾음
    const bt1 = document.querySelector("footer > div");
    // const bt1 = document.getElementById("bt1");

    console.log(bt1);

    // querySelector는 하나만 찾음
    // const bt = document.querySelector("button");

    const bt = document.querySelectorAll("button");

    console.log(bt);
/*
    // 변수 선언  var, let
    // 1. 기존 방법
    console.log(x);  // 변수 호이스팅, 변수 선언시 다른것보다 우선해서 작동함 (undefined로 초기화)
    var x = 10;
    console.log(x);

    // 2. 최근 방법
    // console.log(esx); // let은 호이스팅에 의해 우선하긴 하지만 값(초기화)이 할당되지 않음.
    let esx = 10;    
    console.log(esx);

    //nodelist 순회
    // 1. 전통적인 for문 사용
    console.log("1. 전통적인 for문 사용")
    for (let i = 0; i < bt.length; i++) {
        console.log(bt[i]);
    }

    // 2. for .. in : 키순회
    console.log("2.for .. in 순회")
    for(let i in bt) {
        console.log(i, bt[i]);
    }

    // 3. forEach로 array 순회
    console.log("3.arry 순회")
    bt.forEach((i) => console.log(i));
    bt.forEach((i, idx) => console.log(idx, i));  // 인덱스도 가져옴

    // 4. for of
    console.log("4. for .. of")
    for(let i of bt) {
        console.log(i);
    }

    for(let [idx,i] of bt.entries()) {  // 구조 분해
        console.log(idx, i);
    }
*/
    // 버튼 값 가져오기
    console.log("버튼의 캡션 값 가져오기")
    let s = "";
    s = s + "버튼 캡션 :";
    
    for(let i of bt) {
        s = s + "<li>" + i.getAttribute("id") +  " : " + i.textContent + "</li>";
    }
    console.log(s);
    document.querySelector("#adiv").innerHTML = s + "</ul>";
})     