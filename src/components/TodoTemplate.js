import React from "react";
import { Template, Title } from "../Styled/common-styled";


const TodoTemplate = ({ children }) => {
  return (
    <Template>
      <Title> TodoList </Title>
      {children}
    </Template>
  );
};

export default TodoTemplate;