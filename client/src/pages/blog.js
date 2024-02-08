import React from "react";
import Shimmer from "../components/shimmer";
import HelmentMetaTags from "../components/helmetMetaTags";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../api";

export default function Blog() {
  const bentoClass = "p-3 my-2";
  const bentoStyle = {
    minHeight: "300px",
    borderRadius: "20px",
    background: "#fff",
    boxShadow: "20px 20px 60px #e0e0e0",
    overflow: "hidden",
  };

  document.title = "JK - Blog";

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBlogPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        setLoading(false);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="m-4">
      <HelmentMetaTags />
      <div className="container-fluid mt-2" style={{ maxWidth: "1100px" }}>
        <div className="row no-gutters align-items-stretch">
          <div className="col-sm d-flex flex-column">
            <div
              className={`${bentoClass} bento-bg flex-grow-1 justify-content-center align-items-center`}
              style={bentoStyle}
            >
              {loading ? (
                <div>
                  <div
                    className="mt-2"
                    style={{ width: "40%", height: "20px" }}
                  >
                    <Shimmer />
                  </div>
                  <div
                    className="mt-2"
                    style={{ width: "20%", height: "20px" }}
                  >
                    <Shimmer />
                  </div>
                  <div
                    className="mt-2"
                    style={{ width: "100%", height: "20px" }}
                  >
                    <Shimmer />
                  </div>
                </div>
              ) : null}
              {posts.map((post) => {
                const pubDate = new Date(post.pubDate).toLocaleString();
                return (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <h5>{post.title}</h5>
                    <p className="text-muted">{pubDate}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    ></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
