// 주소 변수
let juso;   // 전체 주소
let si;     // 시별
let gu;     // 구별
let dong;   // 동별
let equptype = // 시설유형
{
    "노인시설":"001",
    "복지회관":"002",
    "마을회관":"003", 
    "보건소":"004",
    "주민센터":"005",
    "면동사모소":"006",
    "종교시설":"007",
    "금융기관":"008", 
    "정자":"009", 
    "공원":"010", 
    "정자 파고라":"011",
    "공원":"012", 
    "교량하부":"013", 
    "나무그늘":"014", 
    "하천둔치":"015", 
    "기타":"099"
};

// console.log(equptype['노인시설']);
// console.log(equptype.노인시설);

//셀렉트박스 내용 만들기
// d : 데이터, s : 셀렉트박스
const createSB = (d, s) => {
    for(let [k, v] of Object.entries(d)){
        const option = document.createElement("option");
        option.text = k;
        option.value = v;
        s.appendChild(option);
    }
};

//셀렉트박스 비우기
// s : 셀렉트박스
const deleteSB = (s, st) => {
    while(s.hasChildNodes()){
        s.removeChild(s.firstChild);
    }
    const option = document.createElement("option");
    option.text = st;
    option.value = "";
    s.appendChild(option);
}


// 주소 데이터 가져오기
const getJuso = async (ss, sel1, sel2, sel3) => {
    const resp = await fetch("juso2023.json");
    // const data = await resp.json();
    // juso = data;
    juso = await resp.json();

    switch (ss) {

    // 시 정보
    case 1:
    si={};
    juso.forEach(element => {
        let {시도명칭, 시도코드} = element;
        if (!si[시도명칭]){
            si[시도명칭] = 시도코드;
        }
    });
    createSB(si, sel1);
    break;

    // 구 정보
    case 2:
    deleteSB(sel2, '--구선택--');
    gu={};
    juso
    .filter(item => item["시도코드"] === sel1.value)
    .map(item => {
        let {시군구명칭, 시군구코드} = item;
        if(!gu[시군구명칭]){
            gu[시군구명칭] = 시군구코드;
        }
    })
    let asdf = {"--구선택--" : "0"};
    createSB(gu, sel2);
    break;

    // 동 정보
    case 3:
    deleteSB(sel3, '--동선택--');
    dong={};
    juso
    .filter(item => item["시도코드"] == sel1.value & item["시군구코드"] == sel2.value)
    .map(item => {
        let {읍면동명칭, 읍면동코드} = item;
        if (!dong[읍면동명칭]) dong[읍면동명칭] = 읍면동코드;
    })

    createSB(dong, sel3);
    break;

    default: console.log("스위치문 에러")
    }
};

const getData = (se1, sel2, sel3, sel4) => {

    // API 주소
    let api = "0WdoKUOsx38ayESWir6fAIUs5PzlcZs542pe8iS1Gpv2cL50rdjiKIbKV%2Fc9R6Rlau6FIv9VXVRwV4PT5HVeFQ%3D%3D";
    let regionCode = sel1.value + sel2.value + sel3.value + "00";
    let pageNo = 1;
    let numOfRows = 10;
    let type = "json";
    let url = "https://apis.data.go.kr/1741000/HeatWaveShelter2/getHeatWaveShelterList2";
    url = url + `?serviceKey=${api}`;
    url = url + `&pageNo=${pageNo}`;
    url = url + `&numOfRows=${numOfRows}`;
    url = url + `&areaCd=${regionCode}`;
    url = url + `&equptype=${sel4.value}`;
    url = url + `&type=${type}`;
    
    equpName = Object.entries(equptype).filter(item=>item[1] == sel4.value)[0][0];
    let h2 = document.querySelector("h2");
    h2.innerHTML = `<span class=h2Sel1>지역코드 (행정동코드) : ${regionCode}, 시설유형 : ${sel4.value}`;
    console.log(url);

    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data);

        if (!('HeatWaveShelter' in data)){
            let h2 = document.querySelector("h2");
            h2.innerHTML = "<span class='exit'>해당되는 검색 결과가 없습니다.</span>";
            return;
        }
        
        let restlist = data.HeatWaveShelter[1].row;
        let count = 1;
        for(let item of restlist){
            const table1 = document.querySelector('#viewTb');
            let conTag2 = "<tr>";
            conTag2 +=  `<td>${count}</td>` +
                        `<td><span class='size'>${item.restname}</span>` +
                        `<td><span class='size'>${item.restaddr}</span>`+
                        `<td><span>${item.useYn}</span></td>`+
                        `<td><span>${item.usePsblNmpr}</span></td>`+
                        `<td><span>${item.colrHoldArcndtn}</span></td>`+
                        `<td>${item.mngdptCd}</td>`;
            conTag2 += "</tr>" ;
            table1.innerHTML += conTag2;
            count++;
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    let sel1 = document.querySelector("#sel1");
    let sel2 = document.querySelector("#sel2");
    let sel3 = document.querySelector("#sel3");
    let sel4 = document.querySelector("#sel4");
    let bt = document.querySelector("#bt");
    let h2 = document.querySelector("h2");


    // 셀렉트박스 채우기
    createSB(equptype, sel4);

    // 시 정보
    let selector = 1;
    getJuso(selector, sel1, sel2, sel3);

    // 구 정보
    sel1.addEventListener("change", () => {
        selector = 2;
        getJuso(selector, sel1, sel2, sel3);
    });

    // 동 정보
    sel2.addEventListener("change", () => {
        selector = 3;
        getJuso(selector, sel1, sel2, sel3);
    });

    // 확인 누르면 정보 출력하기
    bt.addEventListener("click", (e) => {
        e.preventDefault()  ;

        if (sel1.value == "" || sel2.value =="" || sel3.value =="" || sel4.value==""){
            h2.innerHTML = `<span class="h2Sel1">내용을 선택해주세요.</span>`
            return;
        }
        getData(sel1, sel2, sel3, sel4);
    });

   
});