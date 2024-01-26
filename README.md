# Fullstack Template

## 구성
- pnpm workspace
- dev port
  - apps: 3000
  - server: 4000
  - 
### 설치
```
pnpm install
```
### 실행
```shell
// 전체 실행
pnpm start

// 일부 실행의 경우(client, server)
pnpm start:client
pnpm start:server
```

## 설명
- 돼지 고기에 대한 전반적인 설명을 모으는 페이지, Pork-hub
- FrontEnd
  - ReatJS, Redux, Redux-thunk를 이용해서 개발
  - 돼지 고기와 관련된 종합적인 정보를 획득하기 위한 UI 구성
  - 선택한 돼지 부위는 Redux를 통해서 페이지간 공유되고 해당 부위를 변경하면 전체가 변경된다.
- BackEnd
  - Express를 이용하여서 개발
  - 현재 더미 데이터를 기반으로 동작
  - 추후 업그레이드 요소로 외부(youtube, google)에 크롤링을 통하여 데이터를 만드는 방식으로 데이터 전달
### HOME
#### 페이지 설명 및 기능
- 매인 화면으로 돼지 고기 부위에 대한 전반적인 설명이 있는 페이지
- 각 부위를 선택하여 나온 설명에서 하단의 `#Video` 를 누르면 VIDEO 페이지로 이동하고 연관 동영상을 보여준다
#### 페이지 이미지
  ![image](./.assets/ab6ee42c4825158ff354b5eb3a70b0de.png)
### VIDEO
#### 페이지 설명 및 기능
- 비디오 페이지로 돼지 고기 부위에 대한 전반적인 설명이 있는 페이지
- Select에서 각 부위를 선택하거나 HOME에서 이동한 경우 해당 부위가 선택되어있다.
  - 선택된 부위에 대한 Video를 보여준다, 현재는 서버에서 받은 더미데이터 표시
#### 페이지 이미지
  ![image](./.assets/274f3e23e7b4feb29e62c98f9eb21efc.png)

