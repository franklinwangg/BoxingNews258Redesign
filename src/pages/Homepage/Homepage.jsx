import React, { useContext } from "react";
import "./Homepage.css";
import img1 from "../../assets/postImages/joseph-parker.png";
import img2 from "../../assets/postImages/parker-and-joshua.png";
import img3 from "../../assets/postImages/fulton-vs-foster.png";
import HeaderBar from "../../components/HeaderBar";

import { Link } from "react-router-dom";

import { PostsContext } from "../../contexts/PostsProvider";

const Homepage = () => {
  // extract the first three posts, and paste them onto the stories
  // const [posts, setPosts] = useState([]);

  // useEffect(() => { // infinite loop?
  //   setPosts(posts_context);
  // }, [posts]);

  const { posts } = useContext(PostsContext);
  console.log("homepage : posts - ", posts);

  return (
    <div className="homepage">
      {/* Top Banner Ad */}
      <div className="banner-ad">
        <img
          className="banner-ad__image"
          src="https://via.placeholder.com/728x90?text=Moozi+Ad"
          alt="Ad Banner"
        />
      </div>

      {/* Header */}
      <HeaderBar />

      {/* Main Content */}
      {posts.length > 0 && (
        <main className="homepage__content">
          {/* Left Feature Story */}
          <article className="feature-story">
            {posts[0] ? (
              <Link
                className="first-post-title"
                to={`/post/${posts[0].id}`}
                state={{
                  id: posts[0].id,
                  title: posts[0].title,
                  article_url: posts[0].article_url,
                  image_url: posts[0].image_url,
                }}
              >
                <img className="side-story__image" src={img1} alt="Story" />
                <div className="story-information">
                  <div className="side-story__description">
                    {posts[0].description}
                  </div>
                  <h2 className="side-story__title">{posts[0].title}</h2>
                  <p className="side-story__author">{posts[0].author}</p>
                </div>
              </Link>
            ) : (
              <p>Loading...</p>
            )}
          </article>

          {/* Right Side Stories */}
          <div className="side-stories">
            <article className="side-story"></article>

            {posts[1] ? (
              <Link
                className="first-post-title"
                to={`/post/${posts[1].id}`}
                state={{
                  id: posts[1].id,
                  title: posts[1].title,
                  article_url: posts[1].article_url,
                  image_url: posts[1].image_url,
                }}
              >
                <img className="side-story__image" src={img2} alt="Story" />
                <div className="story-information">
                  <div className="side-story__description">
                    {posts[1].description}
                  </div>
                  <h2 className="side-story__title">{posts[1].title}</h2>
                  <p className="side-story__author">{posts[1].author}</p>
                </div>
              </Link>
            ) : (
              <p>Loading...</p>
            )}

            <article className="side-story">
              {posts[2] ? (
                <Link
                  className="first-post-title"
                  to={`/post/${posts[2].id}`}
                  state={{
                    id: posts[2].id,
                    title: posts[2].title,
                    article_url: posts[2].article_url,
                    image_url: posts[2].image_url,
                  }}
                >
                  <img className="side-story__image" src={img3} alt="Story" />
                  <div className="story-information">
                    <div className="side-story__description">
                      {posts[2].description}
                    </div>
                    <h2 className="side-story__title">{posts[2].title}</h2>
                    <p className="side-story__author">{posts[2].author}</p>
                  </div>
                </Link>
              ) : (
                <p>Loading...</p>
              )}
            </article>
          </div>
        </main>
      )}
    </div>
  );
};

export default Homepage;
