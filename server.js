const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // 환경 변수 PORT 사용

// 카운트 값을 저장할 변수
let count = 0;

// 정적 파일을 제공
app.use(express.static('public'));

// 카운트 값을 가져오는 API
app.get('/count', (req, res) => {
    res.json({ count });
});

// 카운트 값을 설정하는 API
app.post('/count', express.json(), (req, res) => {
    if (typeof req.body.count === 'number') {
        count = req.body.count;
        res.status(200).send('Count updated');
    } else {
        res.status(400).send('Invalid count value');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
