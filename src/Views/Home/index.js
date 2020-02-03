import React, { useState } from "react";

import List from "../../Components/List";

import "./styles.css";
import logo from "../../Assets/Images/logo.png";
import List from "../../Components/List";
import PostLoading from "../../Components/PostLoading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div class="container">
      <nav>
        <div class="nav-content">
          <img class="logo" src={logo} />
          <input
            class="search"
            placeholder="Search for places, things and people"
          />
          <img
            class="perfil"
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
          />
          <h5 class="nav-text">Nome</h5>
          <h5 class="nav-text">Home</h5>
          <i class="fas fa-user icons" />
          <i class="fab fa-facebook-messenger icons" />
          <i class="fas fa-globe-americas icons" />
          <i class="arrow-down icons" />
        </div>
      </nav>

      <div class="body">
        <div class="left-menu"></div>
        <div class="content">
          <div class="post-container">
            <div class="post-container-header">
              <i class="fas fa-pen post-container-icon" />
              <h5>Update status</h5>
              <span className="separator">|</span>
              <i class="fas fa-images post-container-icon" />
              <h5>Add Photos/Video</h5>
            </div>
            <div class="post-container-content">
              <p>Whats on your mind ?</p>
            </div>
          </div>
          <div className="posts">
            {loading && (
              <>
                <PostLoading />
                <PostLoading />
                <PostLoading />
              </>
            )}

            <List isLoading={value => setLoading(value)} />
          </div>
        </div>
        <div class="right-menu"></div>
      </div>
    </div>
  );
}
