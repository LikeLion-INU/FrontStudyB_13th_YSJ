import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 15px;
  border-width: 2px;
  border-radius: 10px;
  cursor: pointer;
  background-color: skyblue;  
  color: white;              
  border: none;               
  margin-top: 0px;
  margin-bottom: 8px;
  margin-right: 8px;
  transition: background-color 0.2s;
  &:hover {
    background-color: deepskyblue;
  }
`;


// 버튼 컴포넌트에서 프롭스로 받은 타이틀이 버튼 목록에 표시
// 스타일드 컴포넌트를 사용해서 버튼 태그에 스타일을 준 스타일드 버튼 컴포넌트 생성
// 프롭스로 받은 온클릭은 스타일드버튼의 온클릭에 넣어줌으로써 클릭이벤트를 상위 컴포넌트에서 받을 수 있도록 생성
function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;