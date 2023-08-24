document.addEventListener("DOMContentLoaded", () => {
    // #id로 찾음
    const bt1 = document.querySelector("#bt1");
    // const bt1 = document.getElementById("bt1");

    console.log(bt1);

    // querySelector는 하나만 찾음
    // const bt = document.querySelector("button");

    const bt = document.querySelectorAll("button");

    console.log(bt);
})