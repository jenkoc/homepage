import { Helmet } from "react-helmet";

const HelmetMetaTags = ({ title, description, url }) => {
  return (
    <Helmet>
      <meta property="og:title" content={title ? title : "Jens Kock"} />
      <meta
        property="og:description"
        content={
          description
            ? description
            : "Come check out how Jens Kock can help you with all your IT needs. Jens offers a comprehensive overview of top-tier IT services and consulting, tailored to empower your business's technological infrastructure. From cloud computing and data management, to personalized consulting services to optimize your IT strategies, Jens Kock is your partner in navigating the complex world of technology. Dive into my resourceful blog"
        }
      />
      <meta
        property="og:url"
        content={url ? url : "https://www.jenskock.de/"}
      />
      <meta property="og:image" content="https://www.jenskock.de/jk.svg" />
    </Helmet>
  );
};

export default HelmetMetaTags;
