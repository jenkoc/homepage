import { BrowserRouter, Routes, Route } from "react-router-dom";

// Local Storage
import { useLocalStorage } from "react-use";

// Google Analytics
import ReactGA from "react-ga4";

import Home from "./pages/home";
import Imprint from "./pages/imprint";
import PrivacyPolicy from "./pages/privacyPolicy";
import CookiePolicy from "./pages/cookiePolicy";
import About from "./pages/about";
import Blog from "./pages/blog";
import SingleBlogPost from "./pages/singleBlogPost";
import NotFound from "./pages/notFound";

// Header
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// History
import { history } from "./history";

// Cookie Banner
import { CookieBanner } from "./components/cookieBanner";

// Styles (Bootstrap)
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.scss";
import "./App.css";

function App() {
  const [consent] = useLocalStorage("cc", "x");

  if (consent === "a") {
    const TRACKING_ID = "G-CVW64BR7TM";
    ReactGA.initialize(TRACKING_ID);
  }

  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<SingleBlogPost />} />
          <Route exact path="/cookiepolicy" element={<CookiePolicy />} />
          <Route exact path="/imprint" element={<Imprint />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
