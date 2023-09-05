document.addEventListener("DOMContentLoaded", () => {

    // const sel1 = document.getElementById("sel1");
    // const sel2 = document.getElementById("sel2");
    // const dc1 = document.getElementById("div1");
    // const dc2 = document.getElementById("div2");

    // sel1.addEventListener("change", () => {
    //     console.log(sel1.textContent);
    //     if (sel2.textContent == "화씨온도(℉)") sel2.textContent = "섭씨온도(℃)";
    //     else sel2.textContent = "화씨온도(℉)";
    //     if (dc1.textContent == "℃") dc1.textContent = "℉";
    //     else dc1.textContent = "℃";
    //     if (dc2.textContent == "℃") dc2.textContent = "℉";
    //     else dc2.textContent = "℃";
    // })

    const toggle = (v1, v2, v3, v4) => {
        txt1.value = "";
        txt2.value = "";
        sel1.value = v1;
        sel2.value = v2;
        div1.textContent = v3;
        div2.textContent = v4;
    }

    const sel1 = document.querySelector("#sel1");  // id값을 넣을땐 #붙이기
    const sel2 = document.querySelector("#sel2");

    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    // select box1 제어문, change시 작동, form태그에 value값을 지정하여 제어가능
    sel1.addEventListener("change", () => {
        if (sel1.value == "C") {
            toggle("C","F","℃","℉");
        }
        else {
            toggle("F","C","℉","℃");
        }
    });

    sel2.addEventListener("change", () => {
        txt1.value = "";
        txt2.value = "";
        if (sel2.value == "C") {
            sel1.value = "F";
            div2.textContent = "℃";
            div1.textContent = "℉";
        }
        else {
            sel1.value = "C";
            div1.textContent = "℃";
            div2.textContent = "℉";
        }
    });

    // 온도 입력 및 계산

    const cTof = (c) => {
        txt2.value = (c*9/5)+32;
    };

    const fToc = (f) => {
        txt2.value = (f-32)*5/9;
    };

    txt1.addEventListener("input", () => {
        if (sel1.value == "C") cTof(parseFloat(txt1.value));
        else fToc(parseFloat(txt1.value));
    });
    
});