import React, { useEffect, useState } from "react";
import HomeContainer from "../container/HomeContainer";
import MainLogo from "../components/home/MainLogo";
import SubTitle from "../components/home/SubTitle";
import {
  Button,
  Form,
  Input,
  Inputs,
  LinkButton,
} from "../components/common/Common";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.loginSuccess === true) {
        alert("로그인에 성공하였습니다.");
        localStorage.setItem("user_token", data.userToken);
        navigate("/board");
      } else {
        alert("로그인 정보를 다시 확인해주세요.");
      }
    } catch (error) {
      console.error(error);
      alert("올바른 정보를 입력해주세요.");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      return navigate("/board");
    }
  }, []);
  return (
    <HomeContainer>
      <MainLogo />
      <SubTitle>나만의 작은 비밀 노트</SubTitle>
      <Form onSubmit={handleLogin}>
        <Inputs>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail을 입력하세요."
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={onChangePassword}
          />
        </Inputs>
        <Button color="blue" type="submit">
          로그인
        </Button>
        <LinkButton to="/signup">회원가입</LinkButton>
      </Form>
    </HomeContainer>
  );
}
