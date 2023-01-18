import React, { useState } from "react";
import PropsTypes from "prop-types";
import * as S from "./style";
const SelectBox = ({ list }) => {
  const [isShow, setShow] = useState(false); //리스트가 보이는지
  const [currentValue, setCurrentValue] = useState(list[0].text); //현재 선택한 옵션

  const showOptionList = () => {
    setShow((prev) => !prev);
  };

  const handleOption = (e) => {
    //옵션 선택시
    setCurrentValue(e.target.innerText);
    setShow((prev) => !prev);
  };

  return (
    <S.SelectContainer>
      <S.SelectLabel onClick={showOptionList}>{currentValue}</S.SelectLabel>
      <S.OptionList isShow={isShow}>
        {list.map((item) => (
          <S.Option key={item.id} value={item.value} onClick={handleOption}>
            {item.text}
          </S.Option>
        ))}
      </S.OptionList>
    </S.SelectContainer>
  );
};
SelectBox.PropsTypes = {
  list: PropsTypes.object,
};
export default SelectBox;
