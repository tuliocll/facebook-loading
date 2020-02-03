import React, { useState, useEffect } from "react";

import Post from "../Post";
<<<<<<< Updated upstream
import loadingGif from "../../Assets/Images/loading.gif";

export default function List() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [postsPage, setPostPage] = useState(5);
=======
import imgLoading from "../../Assets/Images/loading.gif";

export default function List({ isLoading }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [postsPage, setPostsPage] = useState(5);
  const [loading, setLoading] = useState(true);
>>>>>>> Stashed changes

  useEffect(() => {
    getPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
<<<<<<< Updated upstream
=======
    isLoading(loading && page === 1);
>>>>>>> Stashed changes
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

<<<<<<< Updated upstream
=======
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      page === totalPage ||
      loading
    ) {
      return;
    }

    setPage(page + 1);
  }

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
  return (
    <>
      {posts.map(dados => (
        <Post dados={dados} />
      ))}

      {loading && page > 1 && <img width="20" src={imgLoading} />}
    </>
>>>>>>> Stashed changes
  );
}
