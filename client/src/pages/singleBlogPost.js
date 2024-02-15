import React from "react";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../api";
import HelmentMetaTags from "../components/helmetMetaTags";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import Shimmer from "../components/shimmer";

export default function SingleBlogPost() {
  const { id } = useParams();

  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBlogPost(id)
      .then((response) => {
        response.data.pubDate = new Date(
          response.data.pubDate
        ).toLocaleString();

        document.title = `JK - ${response.data.title}`;

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
    <main className="mt-4">
      {post ? (
        <HelmentMetaTags
          title={post.title}
          description={post.description}
          url={`https://www.jenskock.de/blog/${id}`}
        />
      ) : null}
      <div className="container-fluid" style={{ maxWidth: "740px" }}>
        <div className="justify-content-center align-items-center flex-grow-1 p-3 bento">
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
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
          <p className="text-muted m-0 p-0">Share via</p>
          <div className="d-flex flex-wrap">
            <EmailShareButton
              className="me-1"
              subject={post?.title}
              url={window.location.href}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <LinkedinShareButton
              className="me-1"
              title={post?.title}
              url={window.location.href}
              summary={post?.description}
              source={window.location.href}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <RedditShareButton
              className="me-1"
              url={window.location.href}
              title={post?.title}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <TwitterShareButton
              className="me-1"
              url={window.location.href}
              title={post?.title}
              caption={post?.description}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <TelegramShareButton
              className="me-1"
              url={window.location.href}
              title={post?.title}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <WhatsappShareButton
              className="me-1"
              url={window.location.href}
              title={post?.title}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </main>
  );
}
