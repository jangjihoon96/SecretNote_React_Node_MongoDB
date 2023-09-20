import React from "react";
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

export default function Home({
  email,
  password,
  setEmail,
  setPassword,
  onLogIn,
}) {
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    onLogIn();
    navigate("/board");
    setPassword("");
  };
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
