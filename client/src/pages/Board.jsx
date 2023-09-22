import React, { useEffect, useState } from "react";
import BoardContainer from "../container/BoardContainer";
import MainTitle from "../components/common/MainTitle";
import List from "../components/board/List";
import ListItem from "../components/board/ListItem";
import ItemTitle from "../components/board/ItemTitle";
import ItemDate from "../components/board/ItemDate";
import BlueLink from "../components/board/BlueLink";
import EditButton from "../components/board/EditButton";
import DeleteButton from "../components/board/DeleteButton";
import ItemLink from "../components/board/ItemLink";

export default function Board() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const user_token = localStorage.getItem("user_token");
    fetch(`http://localhost:3001/api/posts/read?token=${user_token}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setPosts(res);
      });
  }, []);

  return (
    <BoardContainer>
      <MainTitle>나만의 비밀 노트</MainTitle>
      <List>
        {posts
          .map((post, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLink to={`/board/${post._id}`}>
                  <ItemTitle>{post.title}</ItemTitle>
                  <ItemDate>{post.date}</ItemDate>
                </ItemLink>
                <EditButton>수정</EditButton>
                <DeleteButton>삭제</DeleteButton>
              </ListItem>
            );
          })
          .reverse()}
      </List>
      <BlueLink to="/write">글쓰기</BlueLink>
    </BoardContainer>
  );
}
