const express = require("express");
const { getBlogPosts, getFeed } = require("./wordpress");

const app = express();

app.use(express.static('build'));

app.use(express.json());

app.use("/api/v1/blogposts/:id", async (req, res, next) => {
  try {
    const posts = await getBlogPosts();
    const result = posts.filter((p) => p.id === req.params.id)[0];
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.use("/api/v1/blogposts", async (req, res, next) => {
  try {
    const result = await getBlogPosts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use("/feed/rss", async (req, res, next) => {
  try {
    const result = await getFeed("rss");
    res.set("Content-Type", "application/rss+xml");
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use("/feed/atom", async (req, res, next) => {
  try {
    const result = await getFeed("atom");
    res.set("Content-Type", "application/rss+xml");
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use("/feed/json", async (req, res, next) => {
  try {
    const result = await getFeed("json");
    res.set("Content-Type", "application/rss+xml");
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: __dirname + '/../server' });
});

app.listen(3000);
