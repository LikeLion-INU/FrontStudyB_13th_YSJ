import React from "react";
import styled from "styled-components";
// 앞에서 만든 PostListItem 컴포넌트를 사용하기 위해 import 진행
import PostListItem from "./PostListItem";

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

// 글 목록 렌더링
// postList 컴포넌트의 프롭스로 받은 posts라는 배열에는 post 객체들이 들어있음
// 이 post 배열의 map 함수를 이용하여 각 post 객체에 대해 postlist 컴포넌트를 만들어서 렌더링
function PostList({ posts, onClickItem }) {
  if (!Array.isArray(posts)) return <div>게시글이 없습니다.</div>;

  return (
    <Wrapper>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} onClick={() => onClickItem(post)} />
      ))}
    </Wrapper>
  );
}

export default PostList;