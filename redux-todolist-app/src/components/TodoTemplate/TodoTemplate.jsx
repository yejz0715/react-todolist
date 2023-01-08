import React from "react";
import * as S from "./templateStyle";
const TodoTemplate = ({ children }) => {
  return <S.TemplateBlock>{children}</S.TemplateBlock>;
};
export default TodoTemplate;
