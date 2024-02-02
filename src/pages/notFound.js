import HelmentMetaTags from "../components/helmetMetaTags";
import CTAButton from "../components/ctaButton";

export default function NotFound() {
  return (
    <main className="m-4 d-flex text-center flex-column align-items-center justify-content-center">
      <HelmentMetaTags />
      <img src="/notFound.png" alt="logo" style={{ maxWidth: "200px" }} />
      <h3>
        Hoppla! Es scheint, als hättest du eine Seite gefunden, die nicht
        existiert.
      </h3>
      <p>
        Aber keine Sorge, selbst die besten Entdecker verirren sich manchmal!
      </p>
      <CTAButton
        title="Lass uns dich wieder auf Kurs bringen"
        href="/"
        target="_self"
      />
    </main>
  );
}
