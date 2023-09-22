import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/api/posts/read/detail?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setPostDetail(res);
      });
  }, [id]);
  return (
    <div>
      <h2>{postDetail.title}</h2>
      <p>{postDetail.content}</p>
      <p>{postDetail.date}</p>
    </div>
  );
}
