![스크린샷 2023-07-28 오후 4 49 26](https://github.com/billiweb/todolist-project-lv/assets/119646235/36a886d5-8143-46b1-8065-050c949e8df3)

1. 구현해야 할 기능
    - Create todo
    - Read Todos, Todos
    - Update Todo
    - Delete Todo

2. 요구사항
   
    (1) 공통 : todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.
    (2) 메인 페이지 : Todo의 상태에 완료 그룹과 진행중 그룹을 나눠서 구현.
    (3) Todo를 추가하면 제목과 내용 input 은 빈 값이 되도록 구현.
    (4) input 값이 있는 상태에서 상세페이지로 이동하는 경우, input value 초기화
    (5) Todo의 완료 상태를 '취소' '완료'로 구분
    (6) 최대 넓이 1200px / 최소 넓이 800px / 가운데 배치
    (7) 상세페이지
        - Todo id / Todo title / Todo contents / '이전' 버튼 구현

4. 설치 프로그램 
    - yarn add redux react-redux
    - yarn add react-router-dom
    - yarn add shortid
