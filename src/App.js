import React from "react";
import Header from "./Header";
import Post from "./Post";

export default function App() {
  return (
    <>
      <Header title="Blog">
        <h2>Subtitulo</h2>
      </Header>
      <hr />
      <Post
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
      />
    </>
  );
}
