import React from "react";
import PropTypes, { number } from "prop-types";

export default function Post(props) {
  return (
    <>
      <br />
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
      </article>
      Likes: {props.likes}
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
