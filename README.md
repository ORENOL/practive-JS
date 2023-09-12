# 자바스크립트 학습 공간

> JavaScript 학습을 위한 저장소 공간입니다.

## 개발환경
해당 저장소는 VSCode의 Live Server를 활용해서 Chrome에 최적화 시킨 프로젝트입니다. 아래 제시된 프로그램을 활용해주세요.

- Chrome (필수)
- VSCode
    - Live Server

## 학습내용
<details markdown="1">
<summary>"pico.css 활용 예제"  완료</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/01">01 폴더</a>

<hr/>

- [x] 헤더
- [x] 메인
- [x] 섹션
    - [x] HTML
    - [x] CSS
    - [x] JavaScript
    - [x] React
    
</details>

<br/><br/>

<details markdown="1">
<summary>버튼 클릭</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/02">02 폴더</a>

<hr/>

* 8월 24일 학습 내용
    * 화살표 함수
        * () => {} 
    * 변수에 함수 할당 
        * const 변수이름 = () => {}


    
</details>

<br/><br/>

<details markdown="1">
<summary>버튼 클릭 심화 </summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/03">03 폴더</a>

<hr/>

* 8월 24일 학습 내용
    * 버튼 클릭시 함수 실행
        * onclick="함수이름()"
    * 요소를 만들고 태그에 연결
        * createElement, createTextNode, append
    * 요소를 조회하기
        * document.querySelector("태그")
    * 요소를 수정하기
        * document.querySelector("태그").innerHTML = "수정 내용"
    * 요소를 삭제하기
        * document.querySelector("태그").remove
    * 요소를 수정하기
        * document.querySelector("태그").innerHTML = "수정 내용"
    * 변수 선언 방법
        * var, let
    * 반복문 방법
        * for, for in, for Each, for of

</details>

<br/><br/>

<details markdown="1">
<summary>주사위 던지기</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/04">04 폴더</a>

<hr/>

* 8월 24일 학습 내용
    * 주사위 던지기 버튼 만들기
        * adiv.innerHTML = `<img src="./static/images/${n}.png">`;
        * Math.floor(Math.random() * 6)

<br/>        

* 9월 05일 학습 내용
    * 주사위 숫자 맞추기
        * document.querySelector("button");
        * dice2(parseInt(item.value));


</details>

<br/><br/>

<details markdown="1">
<summary>form으로 섭씨 화씨 계산기</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/05">05 폴더</a>

<hr/>

* 9월 05일 학습 내용
    * 섭씨 화씨 온도 계산하기
        * textContents 와 value의 차이 (form 값은 value로 가져오기)
        * if (sel1.value == "C") cTof(parseFloat(txt1.value));


</details>

<br/><br/>

<details markdown="1">
<summary>문자열 다루기</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/06">06 폴더</a>

<hr/>

* 9월 05일 학습 내용
    * 문자열 다루기 // 회문 확인, 숫자 더하기
        * s=txt1.value.split("").reverse().join("") // split 방식

        * for (let i=txt1.value.length-1; i>=0; i--) // 역 loop 방식

        * if (!isNaN(num)) sum = sum + parseInt(num) // 문자열 속 숫자 더하기
    * 배열 다루기  // 중요 키워드 : *filter* , *map*
        * e.preventDefault();  // 새로고침 방지

        * txt1.value = arr.join(","); // 배열을 join으로 합쳐 넣기

        * '사과삭제' : arr = (arr.filter((item) => item != '🍧')); // 필터로 특정워드를 제외하고 새 배열에 넣어줌
        * '사과' : arr = (arr.map((item) => item == '🍧' ? '🍕' : item // map 콜백함수 및 삼항연산자


</details>

<br/><br/>


<details markdown="1">
<summary>3x3 폭탄 게임</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/07">07 폴더</a>

<hr/>

* 9월 05일 학습 내용
    * 박스 클릭시 하트 또는 폭탄이 나오는 시스템
        * 각 박스의 id를 슬라이스하여 박스 텍스트로 만드는 초기화 함수 만들기 (init)

        * 배열을 만들고 박스 클릭시 pop하여 특정 숫자 pop시 폭탄 터짐
        * 사진 넣기 -> innerHTML = "주소"
        * 사진 빼기 -> item.textContent = "아무거나"
    * 문제점 해결 사항
        * 이미 누른 곳 다시 누를 수 있음 // 해결됨 -> if(isNaN(parseInt(item.textContent)))

        * 마지막에 위치한 폭탄이 하트로 안 바뀜 // 해결됨 -> else if (arr.length = 1 & num == 9)
        * 폭탄 섞기를 눌러도 이미지 초기화가 안됨  // 해결됨 -> textContent = "박스 숫자"
        * 폭탄 이미지의 크기가 박스를 벗어남  // 해결됨 -> width='90%'


</details>

<br/><br/>

<details markdown="1">
<summary>영화 top10 API</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/08">08 폴더</a>

<hr/>

* 9월 07일 학습 내용
    * 날짜를 선택하면 해당일의 top10 영화를 보여주는 시스템
        * top10 영화 목록을 api로 불러와서 테이블로 나타내는 법을 앎

        * 태그를 작성하여 innerHTML로 나타냄
        * fetch(url) .then .then
    * 개선점
        * radio를 추가하여 검색결과에 조건을 추가하기
        * 검색결과를 클릭하여 상세정보를 출력하기


</details>

<br/><br/>

<details markdown="1">
<summary>무더위 쉼터 조회하기</summary>

### <a href="https://github.com/ORENOL/practive-JS/tree/main/08">08 폴더</a>

<hr/>

* 9월 12일 학습 내용
    * 시, 구, 동을 선택하여 그 위치에 해당하는 무더위 쉼터를 테이블로 나타냄
        * 시를 선택하면 그 시에 소속된 구를 선택할 수 있도록 함

        * appendchild
        * fetch(url) .then .then --> async await
        * https://k-training-heatwaveshelter.web.app - 파이어베이스 배포
    * 개선점
        * 테이블의 크기를 조절하여 텍스트에 맞도록 하기


</details>

<br/><br/>
## Ref.
- [.gitignore](https://www.toptal.com/developers/gitignore)
- [pico.css](https://picocss.com/)
- [W3School](https://www.w3schools.com/)

## Lisence
- MIT