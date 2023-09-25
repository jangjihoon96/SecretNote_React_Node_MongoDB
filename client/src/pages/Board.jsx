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

  // DB 데이터 불러오기
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

  // 게시물 삭제 기능
  const handleDelete = (id) => {
    let result = window.confirm("게시물을 정말로 삭제 하시겠습니까?");
    if (result) {
      fetch(`http://localhost:3001/api/posts/delete?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            alert(res.message);
            setPosts((prevData) => {
              return prevData.filter((post) => {
                return post._id !== id;
              });
            });
          } else {
            alert(res.message);
          }
        });
    } else {
      return;
    }
  };

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
                <DeleteButton handleDelete={handleDelete} post={post}>
                  삭제
                </DeleteButton>
              </ListItem>
            );
          })
          .reverse()}
      </List>
      <BlueLink to="/write">글쓰기</BlueLink>
    </BoardContainer>
  );
}
