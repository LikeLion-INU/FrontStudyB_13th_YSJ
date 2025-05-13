import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  width: calc(100% - 32px);          /* 괄호 오타 수정 */
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid skyblue;         /* 하늘색 테두리 */
  border-radius: 8px;
  background: white;                 /* 배경색: 흰색 */
  color: black;                      /* 글자색: 검정 */
  cursor: pointer;
  margin-top: 16px;                  /* 위 요소(버튼 등)와의 간격 */
  :hover {
    background: lightgrey;
  }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`

// 타이틀 텍스트를 이용해서 프롭스로 받은 포스트객체에 들어있는 타이틀 문자열 표시
function PostListItem(props) {
    const {post, onClick} = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;