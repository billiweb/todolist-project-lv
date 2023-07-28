import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <div>
      <div>
        <h2>TODOLIST</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: `SWITCH_TODO`,
                      payload: todo.id,
                    });
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: `DELETE_TODO`,
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>DONELIST</h2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: `SWITCH_TODO`,
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </button>

                <button
                  onClick={() => {
                    dispatch({
                      type: `DELETE_TODO`,
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
