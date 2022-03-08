# ReactJS로 영화 웹 서비스 만들기



## ReactJS

### state, props, useEffect, useState



### React JS의 규칙

1. HTML을 기본 페이지에 집적 작성하지 않음
   - button, span 등을 js로 생성하여 사용
2. 컴포넌트는 반드시 첫글자를 대문자로
   - 소문자는 일반 HTML 태그일 뿐



### State를 세팅하는 방법 2가지

```react
/*...*/   
function App() {
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter + 1); // 첫번째 방법
            setCounter((current) => counter + 1); // 두번째 방법
            // 현재 state를 바탕으로 다음 state를 계산할 때 이쪽이 더 안전하다.
        };
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
/*...*/    
```



### 부모 컴포넌트 자식 컴포넌트

 1. React.memo()를 사용하면 부모 컴포넌트에 변경이 일어나 자식 컴포넌트 모두가 re-render가 일어날 때 최적화 해줄수 있다.
 2. 변경이 일어나는 자식 컴포넌트만 re-render 되고 다른 자식들은 이뤄지지 않는다.



### React router

- 설치 커맨드

  ```
  npm i react-router-dom@5.3.0
  ```

  



## NodeJS

### 설치 및 실행

1. node.js 에서 msi로 설치

2. powershell or cmd 에서 입력

   ```tex
   npx create-react-app {폴더 이름}
   ...
   code {폴더 이름} // vscode로 {폴더 이름} 폴더 열기
   ```

3. vscode 터미널에서 입력

   ```
   npm start
   ```



## Java-script

### 문법

1. fetch 와 .then
   1. Promise
      1. callback 함수
      2. 비동기처리
2. async-await
   1. 최근 보편적으로 then보다 더 많이 사용한다.



## GitHub Page 업로드

### 설치

- 터미널

  ```
  npm i gh-pages
  ```

  

### Issue

- 404 not found

  - Public 설정 확인

  - 최상단 Router에 basename 추가

    ```react
    <Router basename={process.env.PUBLIC_URL}>
    ```

    
