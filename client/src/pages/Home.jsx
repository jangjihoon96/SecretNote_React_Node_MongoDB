import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/board">게시판</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/write">글쓰기</Link>
    </div>
  );
}
