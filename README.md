# Software Engineering

## 아그리콜라 게임 개발

<p align="center">
  <img width="1527" alt="agricola_banner" src="https://github.com/SE-cocacola/agricola/assets/41979078/b9d1e360-a496-4180-8cd4-45c02751bf89">
</p>

<p align="center">
    <a href="https://developer.mozilla.org/ko/docs/Web/html"><img src="https://img.shields.io/badge/html-blue.svg" alt="html"></a>
    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript"><img src="https://img.shields.io/badge/javascript-yellow.svg" alt="html"></a>
    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript"><img src="https://img.shields.io/badge/downloads-red.svg" alt="download"></a>
</p>

<p align="center">
  <strong>
  Build your farmstead by sowing fields and raising livestock. But don't forget to eat!<br><br>
  Agricola is an online, 2D game using JavaScript and HTML5.<br><br>
  노트북 하나로 Agricola 보드게임을 가족들과 친구들과 즐겨보세요!</strong>

</p>



## How to start

First, fork the repository. Then, go into your favorite terminal.

    git clone git@github.com:YOUR_USERNAME/game.git
    cd game
    npm install
    npm run serve

> `npm run serve` will start the development server and watch for changes on the client-side code inside the `src` folder and otherwise elsewhere applicable.

Now, while still inside the `game` folder, open another terminal session in that same location. Type and run `npm run dev:node`. This will start the Node.js game server.

> If you want to debug, type `npm run ndb`. `ndb` is Google Chrome's Node Debugging tool which allows Node.js programs to be easily debugged and see all its context and variables. Highly recommended for a much easier time.

Now you may visit `http://localhost:8080` to login and start developing!

For a better time, make sure to join the [Discord channel](https://discord.gg/nkZnHvD) to talk to other developers for help and exclusive dicussions!

> Please be aware of a [possible scam in regards to Delaford](https://github.com/delaford/game#possible-scam-notice) that promises money for testing or similar action.

## 게임 플레이 화면

### 선 정하기
<img width="1680" alt="playing1" src="https://github.com/SE-cocacola/agricola/assets/41979078/b4c764cc-7595-41df-a528-4dfc63f514ac">

### 농지
<img width="1673" alt="playing6" src="https://github.com/SE-cocacola/agricola/assets/41979078/4c3844de-0196-4e68-8171-b082f75507c8">

### 주요 설비 획득
<img width="1680" alt="playing2" src="https://github.com/SE-cocacola/agricola/assets/41979078/734e987a-0631-42d2-a6ad-d4ecc3e044ad">

### 주요 설비 설치
<img width="1680" alt="playing3" src="https://github.com/SE-cocacola/agricola/assets/41979078/9d114be0-7aa3-4970-bc9d-4f8e6dcd027c">

### 게임 진행 - 울타리치기 / 가족 늘리기 / 씨 뿌리기
<img width="1680" alt="playing4" src="https://github.com/SE-cocacola/agricola/assets/41979078/b4a6c74c-c4a4-45f8-9316-b97c9dfad014">

### 게임 진행 - 집 개조
<img width="1680" alt="playing5" src="https://github.com/SE-cocacola/agricola/assets/41979078/052940d2-4ba0-4f8d-8442-074f50d087d8">

### 점수 계산
<img width="1680" alt="playing7" src="https://github.com/SE-cocacola/agricola/assets/41979078/b6e3a02a-e4d9-47e9-8cd0-4633e3c45fa9">

## 디렉터리 구조
<img width="407" alt="tree" src="https://github.com/SE-cocacola/agricola/assets/41979078/3360ffdb-bce2-403d-b105-fdbc5ae6ba1e">

## Class Diagram
![Agricola class diagram](https://github.com/SE-cocacola/agricola/assets/43169705/5db21902-6f37-4661-9ae5-59902e64eb7c)


## 핵심 파일 정리
- [Game](https://github.com/SE-cocacola/agricola/blob/main/js/Game.js)
  - [ ] 게임 시작
  - [ ] 게임 끝
- [GameManager](https://github.com/SE-cocacola/agricola/blob/main/js/GameManager.js)
  - [ ] 라운드 실행
  - [ ] 수확 실행
  - [ ] 이긴 사람 보여주기
- [Player](https://github.com/SE-cocacola/agricola/blob/main/js/Player.js)
  - [ ] 점수 계산
  - [ ] 농부 이동
- [MajorCardManager](https://github.com/SE-cocacola/agricola/blob/main/js/MajorCard/MajorCardManager.js)
  - [ ] 전체 주요 설비 카드 관리
- [ResourceManager](https://github.com/SE-cocacola/agricola/blob/main/js/Resource/ResourceManager.js)
  - [ ] 자원 추가
  - [ ] 자원 소비
  - [ ] 주요 설비 설치
  - [ ] 설치한 주요 설비 조회




## Notice
2인용 게임
보조 설비X, 직업 카드X
회합장소 -> 음식 1개 누적칸

게임의 구현은 7라운드까지만 되어있습니다.

## Reference URL

<p align="center">
    <a href="https://www.notion.so/93b48649139f41ab808a2bdff9a46a15?v=5129384b2ce24768857a6c944cc8ea09"><img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=Notion&logoColor=white" alt="html"></a>
    <a href="https://github.com/SE-cocacola/agricola"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white" alt="html"></a>
    <a href="https://cocacola3.atlassian.net/projects/SE?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:eu.softwareplant.biggantt__biggantt-extcatalog-app-entry#!box/AGILE-5/g"><img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=JiraSoftware&logoColor=white" alt="html"></a>
</p>