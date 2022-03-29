
const getValidationNumber = async () => {
    // 휴대폰 인증 토큰 전송하기
    let phone = document.querySelector('#PhoneNumber01').value
        + document.querySelector('#PhoneNumber02').value
        + document.querySelector('#PhoneNumber03').value

    document.querySelector('#ValidationInputWrapper').style.display = 'flex'
    await axios.post("http://localhost:3000/tokens/phone",
        { phone: phone })
        .then(res => {
            console.log('인증 번호 전송'+"상태코드:"+res.status)
        }).catch(err =>{
            console.log(err)
        })
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
    const token = document.querySelector("#TokenInput").value
    let phone = document.querySelector('#PhoneNumber01').value
        + document.querySelector('#PhoneNumber02').value
        + document.querySelector('#PhoneNumber03').value

    console.log(token)
    console.log(phone)
    await axios.patch('http://localhost:3000/tokens/phone',
        { phone: phone, token: token }
    ).then(res => {
        console.log("핸드폰 인증완료"+"상태코드:"+res.status)
    }).catch(err =>{
        console.log(err)
    })
}

// 회원 가입 API 요청
const submitSignup = async () => {
    await axios.post('http://localhost:3000/user',
        {
            name: document.querySelector('#SignupName').value,
            email: document.querySelector('#SignupEmail').value,
            personal: document.querySelector('#SignupPersonal1').value + '-' + document.querySelector('#SignupPersonal2').value,
            prefer: document.querySelector('#SignupPrefer').value,
            pwd: document.querySelector('#SignupPwd').value,
            phone: document.querySelector('#PhoneNumber01').value
                + document.querySelector('#PhoneNumber02').value
                + document.querySelector('#PhoneNumber03').value
        }
    ).then(res=> console.log('회원가입 완료!'+"상태코드:"+res.status))
    .catch(err =>{
        console.log(err)
    })
}
