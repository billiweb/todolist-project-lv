import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  const todo = todos.filter((todo) => todo.id === id)[0];

  console.log(id);

  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
      <p>{todo.isDone.toString()}</p>
      <button onClick={() => navigate("/")}>이전화면으로</button>
    </div>
  );
};

export default Detail;
