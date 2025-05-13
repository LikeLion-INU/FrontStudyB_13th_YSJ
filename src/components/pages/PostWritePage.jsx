import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

// 새 글 작성 또는 글 수정
// postwritepage 컴포넌트는 두 개의 state를 가지고 있음
// 하나는 글의 제목을 위한 state이고, 다른 하나는 글의 내용을 위한 state
// 두 개의 state 모두 useState hook을 이용하여 선언
function PostWritePage({ onSubmit, editingPost }) {
    const [title, setTitle] = useState(editingPost?.title || "");
    const [content, setContent] = useState(editingPost?.content || "");
    const navigate = useNavigate();
  
    return (
      <Wrapper>
        <Container>
          <TextInput height={20} value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextInput height={480} value={content} onChange={(e) => setContent(e.target.value)} />
  
          <Button
            title={editingPost ? "수정 완료" : "글 작성하기"}
            onClick={() => {
              onSubmit({ id: editingPost?.id, title, content });
              navigate("/");
            }}
          />
        </Container>
      </Wrapper>
    );
  }

export default PostWritePage;