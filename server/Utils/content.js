const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { Feed } = require("feed");

const getCategories = async () => {
  return getBlogPosts().then((posts) => {
    return [
      ...new Set(posts.flatMap((post) => post.category.map((c) => c.name))),
    ];
  });
};

const getBlogPosts = async (category) => {
  try {
    const files = await fs.promises.readdir("data");
    const jsonFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".json"
    );
    let posts = [];

    for (const file of jsonFiles) {
      const filePath = path.join("data", file);
      const data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));

      const htmlFilePath = path.join(
        "data",
        "html",
        file.replace(".json", ".html")
      );
      if (fs.existsSync(htmlFilePath)) {
        const htmlContent = await fs.promises.readFile(htmlFilePath, "utf-8");
        data.content = htmlContent;
      }

      posts = [...posts, data];
    }

    if (category) {
      return posts.filter((p) => p.category.some((c) => c.name === category));
    } else {
      return posts;
    }
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
    feedLinks: {
      json: "https://jenskock.de/blog/json",
      atom: "https://jenskock.de/blog/atom",
      rss: "https://jenskock.de/blog/rss",
    },
  });

  const posts = await getBlogPosts();

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      image: post.image,
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
      date: new Date(post.pubDate),
      image: post.image,
      category: post.category,
    });
  });

  switch (type) {
    case "rss":
      return feed.rss2();
    case "atom":
      console.log("test", feed.atom1());
      return feed.atom1();
    default:
      return feed.json1();
  }
};

module.exports = {
  getCategories,
  getBlogPosts,
  getFeed,
};
