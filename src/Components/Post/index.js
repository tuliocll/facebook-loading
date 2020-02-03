import React from "react";

export default function Post({ data }) {
  const imageUrl = `https://api.adorable.io/avatars/285/${data.name}@adorable.png`;

  return (
    <div class="post">
      <div class="post-header">
        <img class="post-profile-img" src={imageUrl} />
        <div class="name-container">
          <a href="#">{data.name}</a>
          <small>1 min</small>
        </div>
      </div>
      <p>{data.content}</p>
      <div class="actions">
        <a href="#">Like</a>
        <a href="#">Comment</a>
        <a href="#">Share</a>
      </div>

      <div class="post-comment">
        <img
          class="comment-profile-img"
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
        />
        <div class="comment-container">
          <input class="comment-field" placeholder="Write a comment..." />
          <i class="fas fa-camera post-container-icon" />
        </div>
      </div>
    </div>
  );
}
