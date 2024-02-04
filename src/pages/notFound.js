import HelmentMetaTags from "../components/helmetMetaTags";
import CTAButton from "../components/ctaButton";

export default function NotFound() {
  document.title = "JK - 404";
  return (
    <main className="m-4 d-flex text-center flex-column align-items-center justify-content-center">
      <HelmentMetaTags />
      <img src="/notFound.png" alt="logo" style={{ maxWidth: "200px" }} />
      <h3>Oops, it looks like you've found a page that doesn't exist.</h3>
      <p>But don't worry, even the best explorers sometimes get lost!</p>
      <CTAButton title="Let's get you back on track" href="/" target="_self" />
    </main>
  );
}
