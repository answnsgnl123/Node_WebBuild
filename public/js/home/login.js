"use strict"

const id =  document.querySelector("#id"),
      pswd = document.querySelector("#pswd"),
      btn = document.querySelector("#submit");

let login = () => {
  
  if(!id.value) return alert("아이디 입력하시오");
  if(!pswd.value) return alert("비밀번호 입력하시오");

  const req = { 
    id: id.value,
    pswd: pswd.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Context-Type" : "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) => res.json()).then((res) =>{
      if(res.success){
        location.href= "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
  })
  .catch((err) => {
    console.error("로그인 중에러발생");
  });


}

btn.addEventListener("click",login);
