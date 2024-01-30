const CTAButton = ({ title, href, target, type, className }) => {
  return (
    <button
      type="button"
      className={`btn btn-primary m-2 p-3 d-flex align-items-center ${className}`}
      href={href}
      onClick={() => window.open(href, target)}
      target={target}
    >
      <div className="d-flex justify-content-start">
        {type ? (
          <img
            src={`/${type}.svg`}
            width="20"
            height="20"
            alt=""
            className="me-1"
          />
        ) : null}
      </div>
      <div className="flex-grow-1 d-flex justify-content-center">
        {title}
      </div>
    </button>
  );
};

export default CTAButton;
