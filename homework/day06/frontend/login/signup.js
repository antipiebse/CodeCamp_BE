// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
    document.querySelector('#ValidationInputWrapper').style.display = 'flex'
    const phoneNumber = document.querySelector('#PhoneNumber01').value
    +document.querySelector('#PhoneNumber02').value
    +document.querySelector('#PhoneNumber03').value
    await axios.post("http://localhost:3000/tokens/phone",
    {phoneNumber:phoneNumber})
    .catch(function (error) {
            console.log(error);
        });
    console.log('인증 번호 전송')
}

// 회원 가입 API 요청
const submitSignup = async () => {
    console.log('회원 가입 이메일 전송')
    const User = {
            name:document.querySelector('#SignupName').value,
            Personal:document.querySelector('#SignupPersonal').value+'-'+document.querySelector('#SignupPersonal2').value,
            site:document.querySelector('#SignupPrefer').value,
            email:document.querySelector('#SignupEmail').value,
            password:document.querySelector('#SignupPwd').value,
            phoneNumber:document.querySelector('#PhoneNumber01').value
            +document.querySelector('#PhoneNumber02').value
            +document.querySelector('#PhoneNumber03').value
    };
    await axios.post("http://localhost:3000/users",
    {
        user:User
    }).catch(function (error) {
        console.log(error);
    });
    
    console.log('전송완료!')
}
