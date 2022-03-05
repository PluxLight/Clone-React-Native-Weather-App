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
            // setCounter(counter + 1);
            setCounter((current) => counter + 1); // 현재 state를 바탕으로 다음 state를 계산할 때 이쪽이 더 안전하다.
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
