import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoCard from "../../components/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import { todoAdd, todoDelete, todoToggle } from "../../redux/modules/todos";

export default function Todos() {
  const todoData = useSelector((state) => {
    return state.todos;
  });
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [lastID, setLastID] = useState(todoData.slice(-1)[0]?.id ?? 1);
  const dispatch = useDispatch();

  useEffect(() => {
    setLastID(todoData.slice(-1)[0].id);
    console.log(todoData);
    return () => {
      setTitleValue("");
      setBodyValue("");
    };
  }, [todoData]);

  function handleTitleChage(e) {
    setTitleValue(e.target.value);
  }
  function handleBodyChage(e) {
    setBodyValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!titleValue || !bodyValue) {
      alert("제목과 내용을 입력하세요");
      return;
    }
    dispatch(todoAdd({ id: lastID + 1, title: titleValue, body: bodyValue }));
    setTitleValue("");
    setBodyValue("");
  }
  function handleDelete(id) {
    dispatch(todoDelete({ id: id }));
  }
  function handleFinish(id) {
    dispatch(todoToggle({ id: id }));
  }
  return (
    <div>
      <Title>My Todo List</Title>
      <InputSection>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleTitleChage}
            value={titleValue}
            placeholder="제목을 입력하세요"
          />
          <input
            type="text"
            onChange={handleBodyChage}
            value={bodyValue}
            placeholder="상세 내용을 입력하세요"
          />
          <button type="submit">등록</button>
        </form>
      </InputSection>
      <TodoStateView>
        <div>
          <div>진행중</div>
          {todoData.map((data) => {
            if (!data.isDone) {
              return (
                <TodoCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  body={data.body}
                  isDone={data.isDone}
                  handleDelete={handleDelete}
                  handleFinish={handleFinish}
                />
              );
            }
          })}
        </div>

        <div>
          <div>마침</div>
          {todoData.map((data) => {
            if (data.isDone) {
              return (
                <TodoCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  body={data.body}
                  isDone={data.isDone}
                  handleDelete={handleDelete}
                  handleFinish={handleFinish}
                />
              );
            }
          })}
        </div>
      </TodoStateView>
    </div>
  );
}

const Title = styled.div`
  height: 100px;
`;
const InputSection = styled.div`
  height: 400px;
`;
const TodoStateView = styled.div`
  background-color: #bcbcbc;
`;
