import React, { useState } from "react";
import WriteContainer from "../container/WriteContainer";
import MainTitle from "../components/common/MainTitle";
import {
  Button,
  Form,
  Input,
  Inputs,
  Textarea,
} from "../components/common/Common";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("user_token");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleWrite = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          date,
          token,
        }),
      });
      if (response.status === 201) {
        // 게시물 작성 성공
        setTitle("");
        setContent("");
        setDate("");
        alert("게시물 작성 성공");
        navigate("/board");
      } else {
        const data = await response.json();
        console.log(data);
        alert("게시물 작성 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WriteContainer>
      <MainTitle>글쓰기</MainTitle>
      <Form onSubmit={handleWrite}>
        <Inputs>
          <Input
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            id="title"
            name="title"
            onChange={onChangeTitle}
          />
          <Textarea
            placeholder="내용을 입력해주세요."
            value={content}
            id="content"
            name="content"
            onChange={onChangeContent}
          ></Textarea>
          <Input
            type="text"
            placeholder="날짜를 입력해주세요."
            value={date}
            id="date"
            name="date"
            onChange={onChangeDate}
          />
        </Inputs>
        <Button color="blue" type="submit">
          작성하기
        </Button>
      </Form>
    </WriteContainer>
  );
}
