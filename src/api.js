import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jenskock.de/api/v1",
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

async function getBlogPosts() {
  return api.get(`/blogposts`);
}

async function getBlogPost(id) {
  return api.get(`/blogposts/${id}`);
}

export default api;
export { getBlogPosts, getBlogPost };
