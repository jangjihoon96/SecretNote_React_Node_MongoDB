import React, { useState } from "react";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPw,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          id="userName"
          placeholder="이름"
          value={userName}
          onChange={onChangeName}
        />
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="아이디"
          value={userEmail}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="password"
          id="userPassword"
          placeholder="비밀번호"
          value={userPw}
          onChange={onChangePw}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
