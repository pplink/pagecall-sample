# 데모 실행하는 방법

```bash
$ npm install
$ npm start
```
1. localhost:5000 접속

# 참고해야하는 파일

1. config.ts
2. routes/index.ts
3. views/index.hbs

# 주의사항

1. SSL 적용이 안되어있는 페이지에서는 getUserMedia 불가능 (http://localhost 는 가능)
2. iframe 내부에서는 getUserMedia 불가능
3. PageCall API로 받은 HTML을 document.write() 등의 함수로 렌더링 불가 (반드시 form 요청 등을 통해 새탭에 렌더링해야함)


# 담당자 연락처

jurung@pplink.net