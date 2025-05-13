import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList({ comments, onDeleteComment }) {
// commentList라는 이름의 함수 컴포넌트를 만들고 이 컴포넌트의 프롭스로는 comments라는 배열이 들어옴
// 이 배열에는 comment 객체들이 들어있으며, 이 배열에 map 함수를 사용해서 각 댓글 객체를 commentListItem 컴포넌트로 넘겨 화면에 표시
    return (
      <Wrapper>
        {comments.map((comment) => (
          <CommentListItem
            key={comment.id}
            comment={comment}
            onDelete={() => onDeleteComment(comment.id)}
          />
        ))}
      </Wrapper>
    );
  }

export default CommentList;