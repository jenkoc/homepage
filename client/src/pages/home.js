import React from "react";
import { getBlogPosts } from "../api";
import { Link } from "react-router-dom";
import Shimmer from "../components/shimmer";
import CTAButton from "../components/ctaButton";
import SkillImage from "../components/skillImage";
import HelmentMetaTags from "../components/helmetMetaTags";

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBlogPosts()
      .then((response) => {
        setPosts(response.data.slice(0, 3));
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <HelmentMetaTags />
      <div className="container-fluid mt-2" style={{ maxWidth: "1100px" }}>
        <div className="row no-gutters align-items-stretch">
          <div className="col-sm-8 d-flex flex-column">
            <div className="flex-grow-1 justify-content-center align-items-center text-center p-3 my-2 bento">
              <img src="logo.svg" width="200" height="200" alt="logo" />
              <h3
                className="fadein-1 text-left ms-4"
                style={{
                  maxWidth: "60vw",
                  color: "#323130",
                }}
              >
                Helping People Master the Digital World through Innovative IT
                Solutions and Expert Services.
              </h3>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column">
            <div
              className="d-flex flex-grow-1 justify-content-center align-items-end p-3 my-2 bento">
              <img
                src="/memoji-hi.png"
                width="250"
                height="250"
                alt="memoji-hi"
                style={{
                  position: "relative",
                  top: "16px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm d-flex flex-column">
            <div
              className="d-flex justify-content-center align-items-center flex-grow-1 text-center p-3 my-2 bento bento-gradient">
              <div>
                <SkillImage title="HTML" src="/html.svg" />
                <SkillImage title="Java Script" src="/javascript.svg" />
                <SkillImage title="CSS" src="/css.svg" />
                <SkillImage title="Next JS" src="/nextjs.svg" />
                <SkillImage title="Node JS" src="/nodejs.svg" />
                <SkillImage title="React" src="/react.svg" />
                <SkillImage title="React Native" src="/react-native.svg" />
                <SkillImage title="Microsoft" src="/msft.svg" />
                <SkillImage title="Azure" src="/azure.svg" />
                <SkillImage title="C#" src="/c--.svg" />
                <SkillImage title="Dynamics 365" src="/Dynamics365.svg" />
                <SkillImage
                  title="Dynamics 365 Business Central"
                  src="/bc.svg"
                />
                <SkillImage title="Microsoft Dynamics NAV" src="/nav.svg" />
                <SkillImage title="Azure SQL" src="/azure-sql.svg" />
                <SkillImage title="Mongo DB" src="/mongodb.svg" />
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-column">
            <div
              className="flex-grow-1 d-flex flex-column justify-content-center p-3 my-2 bento">
              <CTAButton
                title="Send me an email"
                href="mailto:mail@jenskock.de"
                target="_blank"
                type="mail"
                className="fadein-2 w-100 mx-auto"
              />
              <CTAButton
                title="Book an appointment with me"
                href="https://outlook.office.com/bookwithme/user/55b016e6f2ae4c2181b70f6cc1ca1b76@jenskock.de?anonymous&ep=plink"
                target="_blank"
                type="calendar"
                className="fadein-3 w-100 mx-auto"
              />
              <CTAButton
                title="Chat with me"
                href="https://teams.microsoft.com/l/chat/0/0?users=mail@jenskock.de"
                target="_blank"
                type="chat"
                className="fadein-4 w-100 mx-auto"
              />
            </div>
          </div>
          <div className="col-sm d-flex flex-column">
            <div className="flex-grow-1 p-3 my-2 bento">
              <Link to="/blog" className="text-decoration-none">
                <div className="d-flex justify-content-center">
                  <h5 className="me-1">Blog</h5>
                  <img
                    src="/double-right.svg"
                    width="20px"
                    height="20px"
                    alt="blog"
                    style={{
                      position: "relative",
                      top: "3px",
                    }}
                  />
                </div>
              </Link>
              <div className="d-flex flex-column">
                {loading ? (
                  <div>
                    <div
                      className="mt-2"
                      style={{ width: "100%", height: "20px" }}
                    >
                      <Shimmer />
                    </div>
                    <div
                      className="mt-2"
                      style={{ width: "40%", height: "20px" }}
                    >
                      <Shimmer />
                    </div>
                  </div>
                ) : null}
                {posts.map((post) => {
                  return (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      target="_self"
                      rel="noreferrer"
                    >
                      <div className="comment mt-1 text-justify">
                        <h5 className="text-muted">{post.title}</h5>
                        <small>{new Date(post.pubDate).toLocaleString()}</small>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-4 d-flex flex-column">
            <div
              className="d-flex flex-column flex-grow-1 justify-content-end align-items-center p-3 my-2 bento">
              <div>
                <a
                  className="link-dark"
                  href="https://twitter.com/ccJensKock"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <SkillImage alt="x" src="x.svg" />
                </a>
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/jens-kock/"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <SkillImage alt="linkedin" src="linkedin.svg" />
                </a>
                <a
                  className="link-dark"
                  href="https://github.com/jenskock"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <SkillImage alt="linkedin" src="github.svg" />
                </a>
              </div>
              <div>
                <img
                  src="/memoji-cya.png"
                  width="200"
                  height="200"
                  alt="memoji-cya"
                  style={{
                    position: "relative",
                    top: "16px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-8 d-flex flex-column">
            <div
              className="flex-grow-1 text-center p-3 my-2 bento">
              <h5>About me</h5>
              <p>
                Hi, I'm Jens and my enthusiasm for everything to do with
                computers, technology and electrics began when I was a child.
                This passion has accompanied me over the years and is still a
                central part of my professional and private life today. I am
                committed to working with the latest technologies on a daily
                basis and am always keen to evaluate and optimize the potential
                applications of state-of-the-art solutions. My goal is not only
                to improve my clients' processes, but to take them to the next
                level through automation and innovative approaches.
              </p>
              <div className="overlay d-flex justify-content-center align-items-center">
                <CTAButton title="More" href="/about" target="_self" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
