// 글 목록 보기, 글 작성 페이지 이동
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../List/PostList";
import Button from "../UI/Button";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: skyblue;
  border-bottom: 2px solid skyblue;
  padding-bottom: 8px;
  margin-bottom: 20px;
  text-align: left;     
  padding-left: 20px;    
`;

// 페이지 이동을 위해 리액트 라우터 돔에 useNavigate 훅 사용
// mainpage 컴포넌트의 구조는 기존에 만들어 두었던 컴포넌트들을 모아놓은 수준으로 굉장히 단순한데, 이것이 바로 컴포넌트 기반으로 개발하는 리액트의 장점
function MainPage({ posts }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Title>글 목록</Title>
        <Button
          title="글 작성하기"
          onClick={() => navigate("/post-write")}
        />
        <PostList
          posts={posts}
          onClickItem={(post) => navigate(`/post/${post.id}`)}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;