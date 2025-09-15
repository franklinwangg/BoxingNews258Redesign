import React from "react";
import HeaderBar from "../../components/HeaderBar";
import "./Post.css";

const Post = () => {
  console.log("post");
  return (
    <>
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <main>
        <article className="post">
          <header className="post__header">
            <div className="post__category">Category</div>
            <div className="post__title">Title</div>
            <div className="post__description">Description</div>
            <div className="post__meta">
              <div className="post__author-date">
                <div className="post__author">Author</div>
                <div className="post__date">Date</div>
              </div>
              <div className="post__links-commentnumber">
                <div className="post__links">Links</div>
                <div className="post__commentnumber">Comment Number</div>
              </div>
            </div>
          </header>

          <div className="post__body">
            <div className="post__image-and-article">
              <div className="post__image">image</div>
              <div className="post__article">article</div>
            </div>
            <div className="post__sidebar">sidebar</div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Post;
