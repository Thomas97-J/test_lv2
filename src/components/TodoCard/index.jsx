import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TodoCard({
  id,
  title,
  body,
  isDone,
  handleDelete,
  handleFinish,
}) {
  console.log(id);
  return (
    <div>
      <Link to={`/${id}`}>이동하기</Link>
      <div>제목:{title}</div>
      <div>내용:{body}</div>
      <div>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </button>
        <button
          onClick={() => {
            handleFinish(id);
          }}
        >
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
