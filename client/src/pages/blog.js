import React from "react";
import { useSearchParam } from "react-use";
import { Link, useNavigate } from "react-router-dom";
import { getBlogPosts, getCategories } from "../api";

import Shimmer from "../components/shimmer";
import HelmentMetaTags from "../components/helmetMetaTags";
import CategoryPill from "../components/categoryPill";

export default function Blog() {
  document.title = "JK - Blog";

  const navigate = useNavigate();
  const [posts, setPosts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
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

  React.useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);

  return (
    <main className="mt-4">
      <HelmentMetaTags />
      <div className="container-fluid mt-2" style={{ maxWidth: "740px" }}>
        <div className="d-flex flex-wrap mb-2">
          <CategoryPill
            name="All"
            active={!categoryFilter}
            onClick={() => setCategoryFilter(null)}
          />
          {categories.sort().map((c) => (
            <CategoryPill
              key={c}
              name={c}
              active={categoryFilter === c}
              onClick={() => setCategoryFilter(c)}
            />
          ))}
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
            {posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)).map((p) => {
              const pubDate = new Date(p.pubDate).toLocaleString();
              return (
                <div
                  key={p.id}
                  className="justify-content-center align-items-center flex-grow-1 p-3 my-2 bento"
                >
                  <Link to={`/blog/${p.id}`} style={{ textDecoration: "none" }}>
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
                  <Link to={`/blog/${p.id}`} style={{ textDecoration: "none" }}>
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
