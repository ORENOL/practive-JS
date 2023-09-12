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
}


console.log(equptype);

// console.log(equptype['노인시설']);
// console.log(equptype.노인시설);


// object 순회 2가지 방법
for(let k in equptype) {
    console.log(k, "=>", equptype[k]) // 키를 넣으면 이에 대한 값이 나옴
}
for(let [k, v] of Object.entries(equptype)){
    console.log(k, "=>", v);
}

// 주소 데이터 가져오기
fetch('juso2023.json')
.then(resp => resp.json())
.then(data => {
    juso = data;
    console.log(juso);
    // 모든 주소 배열을 돎
    si={};
    juso.forEach(element => {
        let {시도명칭, 시도코드} = element;
        if (!si[시도명칭]){
            console.log(시도명칭, 시도코드);
            si[시도명칭] = 시도코드;
        }
    });

})
.catch(err => console.log(err));

console.log(juso); // 비동기 작동하기 때문에 fetch 완료보다 console.log가 먼저 뜸


