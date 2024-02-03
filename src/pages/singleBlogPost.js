import React from "react";
import axios from "axios";
import { getBlogPost } from "../api";
import { useParams } from "react-router-dom";
import HelmentMetaTags from "../components/helmetMetaTags";

import Shimmer from "../components/shimmer";

export default function SingleBlogPost() {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBlogPost(id)
      .then((response) => {
        response.data.pubDate = new Date(response.data.pubDate).toLocaleString()
        setPost(response.data);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <main className="m-4">
      {post ? (
        <HelmentMetaTags
          title={post.title}
          description={post.description}
          url={`https://www.jenskock.de/blog/${id}`}
        />
      ) : null}
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
      <h3>{post?.title}</h3>
      <p className="text-muted">{post?.pubDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
    </main>
  );
}
