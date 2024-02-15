import axios from "axios";

const api = axios.create({
  baseURL: `${window.location.origin}/api/v1`,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof error.response === "undefined") {
      console.error("Network error");
    }
    return Promise.reject(error);
  }
);

async function getBlogPosts(category) {
  //return getMockBlogPosts(category);

  if (category) return api.get(`/blogposts?category=${category}`);
  else return api.get(`/blogposts`);
}

async function getBlogPost(id) {
  //return getMockBlogPost(id);

  return api.get(`/blogposts/${id}`);
}

function getMockBlogPost(id) {
  const posts = getMockBlogPosts();
  return { data: posts.data.filter((p) => p.id === id)[0] };
}

function getMockBlogPosts(category) {
  const posts = [
    {
      id: "post1",
      title: "Demo Post 1",
      image: "https://picsum.photos/500/200",
      description:
        "This is a demo description for post 1. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "Node.js",
        },
      ],
      pubDate: "2024-01-01T00:00:00.000Z",
    },
    {
      id: "post2",
      title: "Demo Post 2",
      description:
        "This is a demo description for post 2. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-02-01T00:00:00.000Z",
    },
    {
      id: "post3",
      title: "Demo Post 3",
      description:
        "This is a demo description for post 3. Explore the latest insights and updates.",
      category: [
        {
          name: "JavaScript",
        },
        {
          name: "Node.js",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-03-01T00:00:00.000Z",
    },
    {
      id: "post4",
      title: "Demo Post 4",
      description:
        "This is a demo description for post 4. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-04-01T00:00:00.000Z",
    },
    {
      id: "post5",
      title: "Demo Post 5",
      description:
        "This is a demo description for post 5. Explore the latest insights and updates.",
      category: [
        {
          name: "JavaScript",
        },
        {
          name: "Node.js",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-05-01T00:00:00.000Z",
    },
    {
      id: "post6",
      title: "Demo Post 6",
      description:
        "This is a demo description for post 6. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-06-01T00:00:00.000Z",
    },
    {
      id: "post7",
      title: "Demo Post 7",
      description:
        "This is a demo description for post 7. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "Node.js",
        },
      ],
      pubDate: "2024-07-01T00:00:00.000Z",
    },
    {
      id: "post8",
      title: "Demo Post 8",
      description:
        "This is a demo description for post 8. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-08-01T00:00:00.000Z",
    },
    {
      id: "post9",
      title: "Demo Post 9",
      description:
        "This is a demo description for post 9. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
        {
          name: "JavaScript",
        },
        {
          name: "Node.js",
        },
        {
          name: "React",
        },
      ],
      pubDate: "2024-09-01T00:00:00.000Z",
    },
    {
      id: "post10",
      title: "Demo Post 10",
      description:
        "This is a demo description for post 10. Explore the latest insights and updates.",
      category: [
        {
          name: "Azure",
        },
      ],
      pubDate: "2024-09-01T00:00:00.000Z",
    },
  ];

  if (category) {
    return {
      data: posts.filter((p) => p.category.some((c) => c.name === category)),
    };
  } else {
    return { data: posts };
  }
}

export { getBlogPosts, getBlogPost };
