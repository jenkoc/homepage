const axios = require("axios");
const xml2js = require("xml2js");
const Feed = require("feed").Feed;

const getBlogPosts = async () => {
  try {
    const response = await axios.get("https://jenskock5.wordpress.com/feed");
    const parser = new xml2js.Parser();
    return new Promise((resolve, reject) => {
      parser.parseString(response.data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const posts = result.rss.channel[0].item.map((post) => {
            return {
              id: post.link[0].split("/")[post.link[0].split("/").length - 2],
              title: post.title[0],
              link: post.link[0],
              description: post.description[0],
              pubDate: post.pubDate[0],
              content: post["content:encoded"][0],
            };
          });
          resolve(posts);
        }
      });
    });
  } catch (error) {
    throw error;
  }
};

const getFeed = async (type) => {
  const feed = new Feed({
    title: "Jens Kock",
    description:
      "Explore Jens Kock's blog to uncover cutting-edge IT solutions and consulting expertise.",
    id: "https://jenskock.de",
    link: "https://jenskock.de/blog",
    language: "en",
    image: "https://www.jenskock.de/jk.svg",
    favicon: "https://jenskock.de/favicon.ico",
    copyright: "All rights reserved 2024, Jens Kock",
    updated: new Date(), // optional, default = today
    feedLinks: {
      json: "https://jenskock.de/api/v1/feed/json",
      atom: "https://jenskock.de/api/v1/feed/atom",
    },
    author: {
      name: "Jens Kock",
      email: "mail@jenskock.de",
      link: "https://jenskock.de/about",
    },
  });

  const posts = await getBlogPosts();

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://jenskock.de/blog/${post.id}`,
      link: `https://jenskock.de/blog/${post.id}`,
      description: post.description,
      content: post.content,
      author: [
        {
          name: "Jens Kock",
          email: "mail@jenskock.de",
          link: "https://jenskock.de/about",
        },
      ],
      date: post.date,
      image: post.image,
    });
  });

  /*
feed.addCategory("Technologie");

feed.addContributor({
  name: "Johan Cruyff",
  email: "johancruyff@example.com",
  link: "https://example.com/johancruyff"
}); */

  switch (type) {
    case "rss":
      return feed.rss2();
    case "atom":
      return feed.atom1();
    case "atom":
    default:
      return feed.json1();
  }
};

module.exports = {
  getBlogPosts,
  getFeed,
};
