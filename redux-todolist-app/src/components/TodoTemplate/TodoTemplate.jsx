import React from "react";
import * as S from "./templateStyle";
import PropsTypes from "prop-types";
const TodoTemplate = ({ children }) => {
  return <S.TemplateBlock>{children}</S.TemplateBlock>;
};
TodoTemplate.PropsTypes = {
  children: PropsTypes.object,
};

export default TodoTemplate;
