const express = require('express')
const app = express()
const port = 3000

//restful-api방식


//json parse
app.use(express.json());
// => JSON.parse;

//게시글 목록보기
app.get('/boards', (req, res) => {
    //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 꺼내오기
    const result = [
        {
            number: 1,
            writer: '철수',
            title: "제목1",
            contents: "내용1"
        },
        {
            number: 2,
            writer: '영희',
            title: "제목2",
            contents: "내용2"
        },
        {
            number: 3,
            writer: '훈이쓰',
            title: "제목3",
            contents: "내용3"
        },
    ];
    // 2. 꺼내온 결과 응답 주기
    res.send(result);
})

//게시글 등록하기
app.post('/boards', (req, res) => {
    //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 저장하기
    // 프론트엔드로부터 데이터 받아오기
    // 콘솔로 찍기
    //2. 저장결과 알려주기!
    res.send('등록 성공!');

    //req.body받은 정보출력
    console.log(req.body);
})


// //특정게시글 아이디만 보기
// app.get('/boards/:id', (req, res) => {
//     res.send('Hello World!')
// })

// //게시글 수정하기
// app.put('/boards/:id',(req,res) => {
//     res.send('');
// })

// //게시글 삭제하기
// app.delete('/boards/:id',(req,res) => {
//     res.send('');
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})