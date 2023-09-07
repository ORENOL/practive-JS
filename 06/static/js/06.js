
    // 회문 처리
    const palindrome = () => {
        const txt1 = document.querySelector("#txt1");
        console.log("문자열 길이: ", txt1.value.length);
        if (txt1.value.length === 0) return;

        // 슬라이스 방식
        // for (let i=1; i<(txt1.value.length/2)+1; i++){
        //     if (txt1.value[i-1] != txt1.value.slice(-i)) {
        //         txt2.value= "회문아님";
        //         break;
        //     };
        //     txt2.value= "회문임";
        // }
        
        // 역 for loop 방식
        // s = "";
        // for (let i=txt1.value.length-1; i>=0; i--){
        //     s = s+ txt1.value[i];
        // }
        // if (txt1.value === s) txt2.value= "회문입니다.";
        // else txt2.value = "회문이 아닙니다.";

        // split 방식
        s=txt1.value.split("").reverse().join("");
        if(txt1.value == s) txt2.value = "회문임";
        else txt2.value = "회문아님";
        
    }
    
    // 숫자 합계
    const numSum = () => {
        sum = 0;
        const txt1 = document.querySelector("#txt1");
        for (let num of txt1.value){
            if (!isNaN(num)) sum = sum + parseInt(num)
        }
    txt2.value = sum;
    }
document.addEventListener("DOMContentLoaded", () => {

   // 버튼 확인 
    const bts = document.querySelectorAll("input[type=button]");
    const esc = document.querySelector("input[type=reset]")
    esc.addEventListener('click', () => {
        arr = [];
        console.clear
    });

    console.log(bts);
    bts.forEach(item => {
        item.addEventListener("click", () => {
            console.log(item.value);
            if (item.value == "회문확인") palindrome();
            else numSum();
        });
    });

    // 배열 확인
    let arr = [];

    const bt1s = document.querySelectorAll(".bt1");
    bt1s.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();  // 새로고침 방지
            console.log(item.textContent);
            switch (item.textContent) {
                case '사과' : arr.push('🍧') ; break;
                case '바나나' : arr.push('🍷') ; break;
                case '당근' : arr.push('🍳') ; break;
                case '수박' : arr.push('🍄') ; break;
            }
            console.log(arr);
            txt1.value = arr.join(",");
        })
    });

    const bt2s = document.querySelectorAll(".bt2");
    bt2s.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault;
            switch (item.textContent){
                case '사과삭제' : arr = (arr.filter((item) => item != '🍧')); break;
                case '바나나삭제' : arr = (arr.filter((item) => item != '🍷')) ; break;
                case '당근삭제' : arr = (arr.filter((item) => item != '🍳')) ; break;
                case '수박삭제' : arr = (arr.filter((item) => item != '🍄')) ; break;
            }
            console.log(arr);
        })
    })

    const bt3s = document.querySelectorAll(".bt3");
    bt3s.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault;
            switch (item.textContent.slice(0, 2)){
                case '사과' : arr = (arr.map((item) => item == '🍧' ? '🍕' : item)); break;
                case '바나' : arr = (arr.map((item) => item == '🍷' ? '🍔' : item)) ; break;
                case '당근' : arr = (arr.map((item) => item == '🍳' ? '🍟' : item)) ; break;
                case '수박' : arr = (arr.map((item) => item == '🍄' ? '🌭' : item)) ; break;
            }
            console.log(arr);
        })
    })

});