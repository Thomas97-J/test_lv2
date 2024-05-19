import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Detail() {
  const todoData = useSelector((state) => {
    return state.todos;
  });
  const location = useLocation();
  const detailID = parseInt(location.pathname.split("/")[1] ?? 0);
  const detailData = todoData?.filter((item) => item.id === detailID)[0];
  const navigate = useNavigate();
  console.log(detailData);
  return (
    <div>
      {detailData.id}
      {detailData.title}
      {detailData.body}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </button>
    </div>
  );
}
