import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/pages/MainPage";
import PostWritePage from "./components/pages/PostWritePage";
import PostViewPage from "./components/pages/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handleAddPost = ({ title, content }) => {
    const newPost = { id: Date.now(), title, content, comments: [] };
    setPosts([...posts, newPost]);
  };

  const handleUpdatePost = (updatedPost) => {
    setEditingPost(updatedPost);
  };

  const handleSubmitPost = ({ id, title, content }) => {
    if (id) {
      setPosts(posts.map((p) => (p.id === id ? { ...p, title, content } : p)));
    } else {
      handleAddPost({ title, content });
    }
    setEditingPost(null);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  const handleAddComment = (postId, content) => {
    setPosts(posts.map((post) =>
      post.id === postId ? {
        ...post,
        comments: [...post.comments, { id: Date.now(), content }],
      } : post
    ));
  };

  const handleDeleteComment = (postId, commentId) => {
    setPosts(posts.map((post) =>
      post.id === postId ? {
        ...post,
        comments: post.comments.filter((c) => c.id !== commentId),
      } : post
    ));
  };

  return (
    <BrowserRouter>
      <MainTitleText>승지의 미니 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={
          <MainPage posts={posts} />
        } />
        <Route path="/post-write" element={
          <PostWritePage onSubmit={handleSubmitPost} editingPost={editingPost} />
        } />
        <Route path="/post/:postId" element={
          <PostViewPage
            posts={posts}
            onDeletePost={handleDeletePost}
            onUpdatePost={handleUpdatePost}
            onAddComment={handleAddComment}
            onDeleteComment={handleDeleteComment}
          />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
// 마지막에 :(콜론)postId는 동적으로 변하는 파라미터를 위한 값이다.
// 콜론과 id를 사용하면 실제 컴포넌트에서는 useParams를 사용해 아이디로 해당 값을 가져올 수 있다고 한다.
function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>승지의 미니 블로그</MainTitleText>
      <Routes>
      <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/