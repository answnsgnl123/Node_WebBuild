"use strict"

const id = document.querySelector("#id"),
      email = document.querySelector("#email"),
      pswd = document.querySelector("#pswd"),
      age = document.querySelector("#age"),
      cf_pswd = document.querySelector("#confrim_pswd"),
      btn = document.querySelector("#submit_login_btn");

     
      // console.log(id);
      // console.log(email);
      // console.log(age);
      // console.log(pswd);
      // console.log(cf_pswd);
      // console.log(btn);


let register = () => {
  if (!id.value) return alert("이름을 입력하시오!");
  if (!pswd.value) return alert("비밀번호를 입력하시오"); 
  if (pswd.value != cf_pswd.value) return alert("비밀번호를 다시확인해주세요");



  const req = {
    id: id.value,
    email: email.value,
    pswd: pswd.value,
    age: age.value,
  }



  fetch("/register", {
    method: "POST",
    headers: {
      "Context-Type" : "application/json",
    },
    body: JSON.stringify(req),

  }).then((res) => res.json())
  .then((res) => {
    if(res.success){
      location.href="/login"
    } else {
      if (res.err) return alert(res.err);
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error("회원가입중 에러 발생");
  })

  console.log(req);

}
 

btn.addEventListener("click",register);
