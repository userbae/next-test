"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);
  return (
    <div>
      <div>댓글목록보여줄부분</div>
      {data.length > 0
        ? data.map((a, i) => {
            return (
              <div key={i}>
                <p>{a.content}</p>
                <p>작성자 : {a.author_name}</p>
              </div>
            );
          })
        : "댓글 없음"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              _id: props._id,
            }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
