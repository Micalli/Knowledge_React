import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

export default function App() {
  const [post, setPosts] = useState([
    { id: Math.random(), title: "Tilte#01", subtitle: "Sub#01", likes: 20 },
    { id: Math.random(), title: "Tilte#02", subtitle: "Sub#02", likes: 50 },
    { id: Math.random(), title: "Tilte#03", subtitle: "Sub#03", likes: 10 },
  ]);
  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Tilte#0${prevState.length + 1}`,
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: 51,
        },
      ]);
    }, 2000);
  }
  return (
    <>
      <Header title="Blog">
        <h2>
          Post da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />
      {post.map((value) => (
        <Post
          key={value.id}
          likes={value.likes}
          post={{
            title: value.title,
            subtitle: value.subtitle,
          }}
        />
      ))}
      {/* <Post
        likes={20}
        post={{
          title: "Titulo da noticia 1",
          subtitle: "Subtitle da noticia 1",
        }}
      />
      <Post
        likes={50}
        post={{
          title: "Titulo da noticia 2",
          subtitle: "Subtitle da noticia 2",
        }}
      />
      <Post
        likes={15}
        post={{
          title: "Titulo da noticia 3",
          subtitle: "Subtitle da noticia 3",
        }}
      /> */}
    </>
  );
}
