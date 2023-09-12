const getData = (da1, nCd) => {

// json형식 데이터 가져 오기
    // API 주소
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let tDt = da1.value.replaceAll("-", "");
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
    url = url + `?key=${apikey}`;
    url = url + `&targetDt=${tDt}`;
    // url = url + `&repNationCd=${nCd}`;

console.log(url)

fetch(url)
.then((resp) => resp.json())    // url을 json으로 받아오기
.then((data) => {               // json을 data로 받아오기
    console.log(data.boxOfficeResult['boxofficeType']); // data.boxOfficeResult.boxofficeType
                                                        // data["boxOfficeResult"]["boxofficeType"]]      
    let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    // 영화 데이터 리스트로 출력하기
    let conTag = "<ul>";
    for(let item of dailyBoxOfficeList){
        conTag = conTag + `<li>${item.movieNm}</li>`; // 한 영화 이름마다 태그를 붙여줌
        console.log(item);
    }
    conTag = conTag + "</ul>";

    // 영화 데이터 테이블로 넣기
    table1.innerHTML = "";

    for(let item of dailyBoxOfficeList){
        // 순위 변동 이미지 표시
        if (item.rankInten>0) {
            item.rankInten = "🔺" + Math.abs(item.rankInten)}
        else if (item.rankInten == 0){
            item.rankInten = "="
        } else
            item.rankInten = "🔻" + Math.abs(item.rankInten);
        
        // 신규 여부
        if (item.rankOldAndNew == 'NEW') item.rankOldAndNew = "✨"
        else item.rankOldAndNew = ""
        
        // 테이블 생성기
        const table1 = document.querySelector('#table1');
        let conTag2 = "<tr>";
        conTag2 +=  `<td><span class= 'rank'>${item.rank}</span> <span class = 'inten0'>(${item.rankInten})</span></td>`+
                    `<td><span id= 'cl'>${item.movieNm}</span>  ${item.rankOldAndNew}</td>`+
                    `<td><span class='numtd'>${parseInt(item.salesAmt).toLocaleString('ko-KR')}</span></td>`+
                    `<td><span class='numtd'>${parseInt(item.audiCnt).toLocaleString('ko-KR')}<br/>(${item.audiInten})</span></td>`+
                    `<td><span class='numtd'>${parseInt(item.showCnt).toLocaleString('ko-KR')}</span></td>`+
                    `<td>${item.openDt}</td>`;
        conTag2 += "</tr>" ;
        table1.innerHTML += conTag2;
    }
})

.catch((err) => console.log(err)) // 에러 감지 용도
};

const getData2 = (da1, movCd) => {
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json"
    url = url + `?key=${apikey}`;
    url = url + `&movieCd=${movCd}`

    fetch(url)
    .then((resp) => resp.json())    // url을 json으로 받아오기
    .then((data) => {     
        console.log(data);
        
        let movieInfos = data.movieInfoResult.movieInfo;
        console.log(movieInfos)

        let conTag = `<article><details open><summary>${movieInfos.movieNm} (${movieInfos.movieCd})</summary><ul>`;
        conTag = conTag + `<li>영문 영화명: ${movieInfos.movieNmEn}</li>`;
        conTag = conTag + `<li>제작연도: ${movieInfos.prdtYear}</li>`;
        conTag = conTag + `<li>개봉연도: ${movieInfos.openDt}</li>`;
        conTag = conTag + `<li>상영시간 : ${movieInfos.showTm}</li>`;
        conTag = conTag + `<li>장르명: ${movieInfos.genreNm}</li>`;
        conTag = conTag + `<li>감독: ${movieInfos.directors}</li>`;
        conTag = conTag + `<li>제작국가: ${movieInfos.nations}</li>`;
        conTag = conTag + "</ul></details></article>";
        console.log(conTag);
        detailed.innerHTML = conTag;
    })
    .catch((err) => console.log(err))
}

document.addEventListener("DOMContentLoaded", () => {

    //
    const da1 = document.querySelector("#dt1") // ("input[type=date]")
    let nCd = 'k'



    // 날짜 변경시 날짜 값 가져오기
    da1.addEventListener("change", () => {
        getData(da1, nCd);
        console.log(da1.value); // input[type]일때 value 사용

        // 임시 영화 상세정보 출력
        let movCd = "20226431";
        getData2(da1, movCd);
    })

    // 조건부 설정하기 (미완성)
    const radio_nCd = document.querySelector("#fruit")
    radio_nCd.addEventListener("change", () => {
        nCd = radio_nCd.value;
        getData(da1, nCd)
    });

    // 영화 클릭시 상세 정보 띄우기 (미완성)
    const detailed = document.querySelector('#detailed')
    // detailed.addEventListener("click", () => {
    //     let movCd = dailyBoxOfficeList.movieCd
    //     movCd = "20226431";
    //     getData2(da1, movCd);
        // 영화 상세정보 조회시 스크롤 맨아래로
        // window.scrollTo(0,document.body.scrollHeight);
    // });
// 오픈API 주소 https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do?serviceId=searchDailyBoxOffice
        

});