import React from "react";
import BoardContainer from "../container/BoardContainer";
import MainTitle from "../components/common/MainTitle";
import List from "../components/board/List";
import ListItem from "../components/board/ListItem";
import ItemTitle from "../components/board/ItemTitle";
import ItemDate from "../components/board/ItemDate";
import WriteButton from "../components/board/WriteButton";
import EditButton from "../components/board/EditButton";
import DeleteButton from "../components/board/DeleteButton";
import ItemLink from "../components/board/ItemLink";

export default function Board() {
  return (
    <BoardContainer>
      <MainTitle>나만의 비밀 노트</MainTitle>
      <List>
        <ListItem>
          <ItemLink to="/board">
            <ItemTitle>안녕하세요</ItemTitle>
            <ItemDate>23.03.03</ItemDate>
          </ItemLink>
          <EditButton>수정</EditButton>
          <DeleteButton>삭제</DeleteButton>
        </ListItem>
      </List>
      <WriteButton>글쓰기</WriteButton>
    </BoardContainer>
  );
}
