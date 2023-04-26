"use client";

import Link from "next/link";

export default function ListItem({ result, session }) {
  return (
    <div>
      {result.map((data, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`detail/${data._id}`}>
              <h4>{data.title}</h4>
              <p>1월 1일</p>
            </Link>
            {session?.user.email == data.author ? (
              <Link href={`/edit/${data._id}`}>글수정</Link>
            ) : (
              <div></div>
            )}
            {session?.user.email == data.author ||
            session?.user.role == "admin" ? (
              <span
                onClick={(e) => {
                  fetch("/api/post/delete", {
                    method: "DELETE",
                    body: data._id,
                  })
                    .then(() => {})
                    .then(() => {
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 1000);
                    });
                }}
              >
                삭제
              </span>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
