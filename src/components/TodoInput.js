import React, { useRef, useState } from "react";
import { AddButton, Input, TodoInputBox } from "../Styled/styled-todoInput.js";
import { useDispatch } from "react-redux";
import { todoInsert } from "../redux/reducer";


const TodoInput = () => {

  const [todoInput, setTodoInput] = useState("");
  let nextId = useRef(2);
  
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onRemove = () => {
    setTodoInput("");
  };

  // Enter키 이벤트
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Todo 저장
  const addTodo = () => {
    if (todoInput.length === 0) {
      alert("뭐할꺼냐구!!");
      return;
    }

    dispatch(todoInsert(nextId.current, todoInput));
    nextId.current += 1;
    onRemove();
  };

  return (
    <TodoInputBox>
      <Input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="뭐할꺼얌?!"
        
      />
      <AddButton onClick={addTodo}>추가</AddButton>
    </TodoInputBox>
  );
};

export default TodoInput;