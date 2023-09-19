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

export default function Home() {
  return (
    <HomeContainer>
      <MainLogo />
      <SubTitle>나만의 작은 비밀 노트</SubTitle>
      <Form>
        <Inputs>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail을 입력하세요."
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
          />
        </Inputs>
        <Button color="blue">로그인</Button>
        <LinkButton to="/signup">회원가입</LinkButton>
      </Form>
    </HomeContainer>
  );
}
