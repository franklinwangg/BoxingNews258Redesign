import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";
import { PostsContext } from "../../contexts/PostsProvider";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = () => {
  console.log("post");
  const { posts } = useContext(PostsContext);

  const location = useLocation();

  return (
    <>
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <main>
        {/* id: posts[1].id,
                  title: posts[1].title,
                  article_url: posts[1].article_url,
                  imgUrl: posts[1].imgUrl, */}
        <article className="post">
          <header className="post__header">
            <div className="post__category">{location.state.category}</div>
            <div className="post__title">{location.state.title}</div>
            <div className="post__description">
              {location.state.description}
            </div>
            <div className="post__meta">
              <div className="post__author-date">
                <div className="post__author">{location.state.author}</div>
                <div className="post__date">{location.state.date}</div>
              </div>
              <div className="post__links-commentnumber">
                <div className="post__links">Links</div>
                <div className="post__commentnumber">Comment Number</div>
              </div>
            </div>
          </header>

          <div className="post__body">
            <div className="post__image-and-article">
              <div className="post__image">{location.state.imgUrl}</div>
              <div className="post__article">{location.state.article_url}</div>
            </div>
            <aside className="post__sidebar">
              <h2 className="post__sidebar-title">Active Articles</h2>
              <nav className="active-articles">
                {posts.length > 0 &&
                  posts.map((post) => {
                    return (
                      <Link
                        className="first-post-title"
                        to={`/post/${post.id}`}
                        state={{
                          id: post.id,
                          title: post.title,
                          article_url: post.article_url,
                          imgUrl: post.imgUrl,

                          category: post.category,
                          date: post.date,
                          description: post.description,
                        }}
                      >
                        <div className="active-article">
                          <div className="active-article__title">
                            {post.title}
                          </div>
                          <div className="active-article__date-and-commentnumber">
                            <div className="active-article__date">
                              {post.date}
                            </div>
                            <div className="active-article__commentnumber">
                              Comment Number
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </nav>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
};

export default Post;
