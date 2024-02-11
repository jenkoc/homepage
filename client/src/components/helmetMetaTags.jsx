import { Helmet } from "react-helmet";

const HelmetMetaTags = ({ title, description, url }) => {
  if (!description)
    description =
      "Explore Jens Kock's blog to uncover cutting-edge IT solutions and consulting expertise.";

  if (description?.length > 55) description = description.slice(0, 55) + "...";
  
  return (
    <Helmet>
      <meta property="og:title" content={title ? title : "Jens Kock"} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={url ? url : "https://www.jenskock.de/"}
      />
    </Helmet>
  );
};

export default HelmetMetaTags;
