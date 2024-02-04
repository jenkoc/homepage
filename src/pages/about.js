import HelmentMetaTags from "../components/helmetMetaTags";

export default function About() {
  document.title = "JK - About me";
  return (
    <main className="m-4">
      <HelmentMetaTags />
      <h5>About me</h5>
      <p className="fadein-text-1">
        Hi, I'm Jens and my enthusiasm for everything to do with computers,
        technology and electrics began when I was a child. This passion has
        accompanied me over the years and is still a central part of my
        professional and private life today. I am committed to working with the
        latest technologies on a daily basis and am always keen to evaluate and
        optimize the potential applications of state-of-the-art solutions. My
        goal is not only to improve my clients' processes, but to take them to
        the next level through automation and innovative approaches.
      </p>
      <p className="fadein-text-2">
        In my role as Solution Architect and Lead Developer in international
        international ERP projects, I have gained extensive experience which
        enables me to master even the most complex technical challenges.
        challenges. I lead technical teams with a clear clear vision, a
        pragmatic approach and advise board members in medium-sized medium-sized
        companies to support their digital transformation in a goal-oriented
        manner. My expertise covers a wide range of wide range of technologies,
        including Microsoft Dynamics 365, Azure, .NET and web technologies such
        as JavaScript.
      </p>
      <p className="fadein-text-3">
        The continuous interaction and brainstorming with with like-minded
        people, coupled with the relentless search for innovative approaches to
        unleash the full potential of the latest technologies, are essential for
        me. If you are ready to break new ground together and actively shape the
        actively shape the future, please contact me. I look forward to turn
        visions into reality together with you.
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
