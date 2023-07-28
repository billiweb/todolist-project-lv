import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Form = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        if (!title || !body) {
          alert("필수값이 누락되었습니다!");
          return false;
        }

        e.preventDefault();
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          },
        });
        setTitle("");
        setBody("");
      }}
    >
      <div>
        <laber>제목</laber>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <laber>내용</laber>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
