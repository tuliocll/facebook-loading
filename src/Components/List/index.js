import React, { useState, useEffect } from "react";

import Post from "../Post";
import loadingGif from "../../Assets/Images/loading.gif";

export default function List() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [postsPage, setPostPage] = useState(5);

  useEffect(() => {
    getPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  function getPosts() {
    setLoading(true);
    fetch(`http://localhost:3333/posts?_page=${page}&_limit=${postsPage}`, {
      method: "GET"
    })
      .then(response => {
        setTotalPage(response.headers.get("X-Total-Count") / postsPage);
        return response.json();
      })
      .then(data => {
        setPosts([...posts, ...data]);
        setLoading(false);
      });
  }

  function handleScroll() {
    if (
      page === totalPage ||
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight
    ) {
      return;
    }
    if (loading) return;
    setPage(page + 1);

    console.log("Fetch more list items!", totalPage, page);
  }

  return (
    <div className="posts">
      {posts.map(data => (
        <Post data={data} />
      ))}
      {loading && page > 1 && <img width="20" src={loadingGif} />}
    </div>
  );
}
