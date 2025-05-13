import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../List/CommentList";
import TextInput from "../UI/TextInput";
import Button from "../UI/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const PostContainer = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const ContentText = styled.p`
  font-size: 18px;
  margin-top: 12px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0 8px;
`;

// postViewPage 컴포넌트에서는 먼저 프롭스로 전달받은 글의 ID를 이용해서 전체 데이터에서 해당하는 글을 찾음
// 그리고 찾은 글의 제목, 내용, 댓글을 렌더링하게 되고 그 아래에는 TextInput 컴포넌트와 Button 컴포넌트를 이용해 댓글을 작성할 수 있도록 UI 제공
function PostViewPage({
  posts,
  onDeletePost,
  onUpdatePost,
  onAddComment,
  onDeleteComment,
}) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const post = posts.find((p) => p.id === Number(postId));

  if (!post) return <div>해당 게시글이 존재하지 않습니다.</div>;

  return (
    <Wrapper>
      <Container>
        <Button title="뒤로 가기" onClick={() => navigate("/")} />

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <Button title="수정하기" onClick={() => {
          onUpdatePost(post);
          navigate("/post-write");
        }} />

        <Button title="삭제하기" onClick={() => {
          onDeletePost(post.id);
          navigate("/");
        }} />

        <CommentLabel>댓글</CommentLabel>
        <CommentList
          comments={post.comments}
          onDeleteComment={(commentId) => onDeleteComment(post.id, commentId)}
        />

        <TextInput
          height={40}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button
          title="댓글 작성"
          onClick={() => {
            if (comment.trim() !== "") {
              onAddComment(post.id, comment);
              setComment("");
            }
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;