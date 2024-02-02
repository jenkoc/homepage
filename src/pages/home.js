import SkillImage from "../components/skillImage";
import CTAButton from "../components/ctaButton";

export default function Home() {
  const bentoClass = "p-3 my-2";
  const bentoStyle = {
    minHeight: "300px",
    borderRadius: "20px",
    background: "#fff",
    boxShadow: "20px 20px 60px #e0e0e0",
    overflow: "hidden",
  };

  const bentoGradientStyle = {
    minHeight: "300px",
    borderRadius: "20px",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    boxShadow: "20px 20px 60px #e0e0e0",
    overflow: "hidden",
  };

  return (
    <main>
      <div className="container-fluid mt-2" style={{ maxWidth: "1100px" }}>
        <div className="row no-gutters align-items-stretch">
          <div className="col-sm-8 d-flex flex-column">
            <div
              className={`${bentoClass} bento-bg flex-grow-1 justify-content-center align-items-center text-center`}
              style={bentoStyle}
            >
              <img src="logo.svg" width="200" height="200" alt="logo" />
              <h3
                className="fadein-text-1 text-left ms-4"
                style={{
                  maxWidth: "60vw",
                  color: "#323130",
                }}
              >
                Helping People Master the Digital World through Innovative IT
                Solutions and Expert Services.
              </h3>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column">
            <div
              className={`${bentoClass} bento-bg d-flex flex-grow-1 justify-content-center align-items-end`}
              style={bentoStyle}
            >
              <img
                src="/memoji-hi.png"
                width="250"
                height="250"
                alt="memoji-hi"
                style={{
                  position: "relative",
                  top: "16px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm d-flex flex-column">
            <div
              className={`${bentoClass} d-flex justify-content-center align-items-center flex-grow-1 text-center`}
              style={bentoGradientStyle}
            >
              <div>
                <SkillImage title="HTML" src="/html.svg" />
                <SkillImage title="Java Script" src="/javascript.svg" />
                <SkillImage title="CSS" src="/css.svg" />
                <SkillImage title="Next JS" src="/nextjs.svg" />
                <SkillImage title="Node JS" src="/nodejs.svg" />
                <SkillImage title="React" src="/react.svg" />
                <SkillImage title="React Native" src="/react-native.svg" />
                <SkillImage title="Microsoft" src="/msft.svg" />
                <SkillImage title="Azure" src="/azure.svg" />
                <SkillImage title="C#" src="/c--.svg" />
                <SkillImage title="Dynamics 365" src="/Dynamics365.svg" />
                <SkillImage
                  title="Dynamics 365 Business Central"
                  src="/bc.svg"
                />
                <SkillImage title="Microsoft Dynamics NAV" src="/nav.svg" />
                <SkillImage title="Azure SQL" src="/azure-sql.svg" />
                <SkillImage title="Mongo DB" src="/mongodb.svg" />
                <div className="text-white">...</div>
              </div>
            </div>
          </div>
          <div className="col-sm d-flex flex-column">
            <div
              className={`${bentoClass} flex-grow-1 d-flex flex-column justify-content-center`}
              style={bentoStyle}
            >
              <CTAButton
                title="Schreibe mir eine Email"
                href="mailto:mail@jenskock.de"
                target="_blank"
                type="mail"
                className="fadein-text-1 w-100 mx-auto"
              />
              <CTAButton
                title="Buche einen Termin mit mir"
                href="https://outlook.office.com/bookwithme/user/55b016e6f2ae4c2181b70f6cc1ca1b76@jenskock.de?anonymous&ep=plink"
                target="_blank"
                type="calendar"
                className="fadein-text-2 w-100 mx-auto"
              />
              <CTAButton
                title="Starte einen Chat mit mir"
                href="https://teams.microsoft.com/l/chat/0/0?users=mail@jenskock.de"
                target="_blank"
                type="chat"
                className="fadein-text-3 w-100 mx-auto"
              />
            </div>
          </div>
          <div className="col-sm d-flex flex-column">
            <div className={`${bentoClass} flex-grow-1`} style={bentoStyle}>
              <h5 className="text-center">Blog</h5>
              <div className="d-flex flex-column">
                <div>
                  <a
                    href="https://www.linkedin.com/pulse/how-run-local-apps-from-business-central-web-client-jens-kock/?trackingId=Qa%2BnXHsxQHSfTALfOrihnA%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="comment mt-1 text-justify float-left">
                      <h5 className="text-muted">21 Mai, 2021</h5>
                      <p>
                        How to run local Apps from Business Central Web
                        Client...
                      </p>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/pulse/von-der-theorie-die-praxis-digitalisierung-mal-ganz-konkret-jens-kock/?trackingId=Qa%2BnXHsxQHSfTALfOrihnA%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="comment mt-1 text-justify float-left">
                      <h5 className="text-muted">21 Mai, 2019</h5>
                      <p>
                        Von der Theorie in die Praxis – Digitalisierung mal ganz
                        konkret...
                      </p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <CTAButton title="Mehr" href="/blog" target="_self"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-4 d-flex flex-column">
            <div
              className={`${bentoClass} d-flex flex-column flex-grow-1 justify-content-end align-items-center`}
              style={bentoStyle}
            >
              <div>
                <a
                  className="link-dark"
                  href="https://twitter.com/ccJensKock"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <SkillImage alt="x" src="x.svg" />
                </a>
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/jens-kock/"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <SkillImage alt="linkedin" src="linkedin.svg" />
                </a>
                <a
                  className="link-dark"
                  href="https://github.com/jenskock"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <SkillImage alt="linkedin" src="github.svg" />
                </a>
              </div>
              <div>
                <img
                  src="/memoji-cya.png"
                  width="200"
                  height="200"
                  alt="memoji-cya"
                  style={{
                    position: "relative",
                    top: "16px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-8 d-flex flex-column">
            <div className={`${bentoClass} flex-grow-1`} style={bentoStyle}>
              <h5>Über mich</h5>
              <p>
                Hallo, ich bin Jens und meine Begeisterung für alles, was mit
                Computern, Technik und Elektrik zu tun hat, begann bereits in
                meiner Kindheit. Diese Leidenschaft hat mich über die Jahre
                begleitet und ist bis heute ein zentraler Bestandteil meines
                beruflichen und privaten Lebens. Mein Engagement gilt der
                täglichen Auseinandersetzung mit den neuesten Technologien,
                wobei ich immer darauf bedacht bin, die Einsatzmöglichkeiten
                modernster Lösungen zu evaluieren und zu optimieren. Mein Ziel
                ist es, die Prozesse meiner Kunden nicht nur zu verbessern,
                sondern durch Automatisierung und innovative Ansätze auf das
                nächste Level zu heben.
              </p>
              <div className="overlay d-flex justify-content-center align-items-center">
                <CTAButton
                  title="Mehr"
                  href="/about"
                  target="_self"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
