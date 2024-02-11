import React from "react";
import { useSearchParam } from "react-use";
import { Link, useNavigate } from "react-router-dom";
import { getBlogPosts } from "../api";

import Shimmer from "../components/shimmer";
import HelmentMetaTags from "../components/helmetMetaTags";
import CategoryPill from "../components/categoryPill";

export default function Blog() {
  document.title = "JK - Blog";

  const navigate = useNavigate();
  const [posts, setPosts] = React.useState([]);
  const [categoryFilter, setCategoryFilter] = React.useState(
    useSearchParam("c")
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (categoryFilter) navigate(`/blog?c=${categoryFilter}`);
    else navigate("/blog");

    getBlogPosts(categoryFilter)
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="m-4">
      <HelmentMetaTags />
      <div className="container-fluid mt-2" style={{ maxWidth: "1100px" }}>
        <div className="d-flex flex-wrap mb-2">
          <CategoryPill
            name="All"
            active={!categoryFilter}
            onClick={() => setCategoryFilter(null)}
          />
          <CategoryPill
            name="Azure"
            active={categoryFilter === "Azure"}
            onClick={() => setCategoryFilter("Azure")}
          />
          <CategoryPill
            name="JavaScript"
            active={categoryFilter === "JavaScript"}
            onClick={() => setCategoryFilter("JavaScript")}
          />
          <CategoryPill
            name="Node.js"
            active={categoryFilter === "Node.js"}
            onClick={() => setCategoryFilter("Node.js")}
          />
          <CategoryPill
            name="React"
            active={categoryFilter === "React"}
            onClick={() => setCategoryFilter("React")}
          />
        </div>
        <div className="row no-gutters align-items-stretch">
          <div className="col-sm d-flex flex-column">
            {loading ? (
              <div>
                <div className="mt-2" style={{ width: "40%", height: "20px" }}>
                  <Shimmer />
                </div>
                <div className="mt-2" style={{ width: "20%", height: "20px" }}>
                  <Shimmer />
                </div>
                <div className="mt-2" style={{ width: "100%", height: "20px" }}>
                  <Shimmer />
                </div>
              </div>
            ) : null}
            {posts.map((p) => {
              const pubDate = new Date(p.pubDate).toLocaleString();
              return (
                <div
                  key={p.id}
                  className="justify-content-center align-items-center flex-grow-1 p-3 my-2 bento"
                >
                  <Link to={`/blog/${p.id}`}>
                    <h5>{p.title}</h5>
                    <small className="text-muted">{pubDate}</small>
                  </Link>
                  <div className="d-flex flex-wrap">
                    {p.category
                      .filter((c) => c.name !== "Uncategorized")
                      .map((c) => {
                        return <CategoryPill key={c.name} name={c.name} />;
                      })}
                  </div>
                  <Link to={`/blog/${p.id}`}>
                    <div
                      dangerouslySetInnerHTML={{ __html: p.description }}
                    ></div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
