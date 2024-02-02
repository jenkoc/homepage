import HelmentMetaTags from "../components/helmetMetaTags";

export default function About() {
  return (
    <main className="m-4">
      <HelmentMetaTags />
      <h5>Über mich</h5>
      <p className="fadein-text-1">
        Hallo, ich bin Jens und meine Begeisterung für alles, was mit
        Computern, Technik und Elektrik zu tun hat, begann bereits in meiner
        Kindheit. Diese Leidenschaft hat mich über die Jahre begleitet und ist
        bis heute ein zentraler Bestandteil meines beruflichen und privaten
        Lebens. Mein Engagement gilt der täglichen Auseinandersetzung mit den
        neuesten Technologien, wobei ich immer darauf bedacht bin, die
        Einsatzmöglichkeiten modernster Lösungen zu evaluieren und zu
        optimieren. Mein Ziel ist es, die Prozesse meiner Kunden nicht nur zu
        verbessern, sondern durch Automatisierung und innovative Ansätze auf das
        nächste Level zu heben.
      </p>
      <p className="fadein-text-2">
        In meiner Rolle als Solution Architekt und Lead Developer in
        internationalen ERP-Projekten habe ich umfangreiche Erfahrungen
        gesammelt, die es mir ermöglichen, auch die komplexesten technischen
        Herausforderungen zu meistern. Ich leite technische Teams mit einer
        klaren Vision, einem pragmatischen Ansatz und berate Vorstände in
        mittelständischen Unternehmen, um deren digitale Transformation
        zielführend zu unterstützen. Meine Expertise erstreckt sich über eine
        breite Palette von Technologien, inklusive Microsoft Dynamics 365,
        Azure, .NET sowie Webtechnologien wie JavaScript.
      </p>
      <p className="fadein-text-3">
        Die kontinuierliche Interaktion und das Brainstorming mit
        Gleichgesinnten, gepaart mit der unablässigen Suche nach innovativen
        Ansätzen, um das volle Potenzial modernster Technologien zu entfesseln,
        sind für mich von essenzieller Bedeutung.
      </p>
      <p className="fadein-text-4">
        Falls Sie bereit sind, gemeinsam neue Wege zu beschreiten und die
        Zukunft aktiv zu gestalten, kontaktieren Sie mich. Ich freue mich
        darauf, gemeinsam mit Ihnen Visionen Realität werden zu lassen.
      </p>
      <div className="d-flex justify-content-center mt-2">
        <img
          src="/1541679598467.jpeg"
          alt="Jens Kock"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
          className="fadein-img-5"
        />
      </div>
    </main>
  );
}
