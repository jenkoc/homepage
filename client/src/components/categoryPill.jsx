import React from "react";

const CategoryPill = ({ name,active, onClick }) => {
  function getImgSrc() {
    switch (name) {
      case "Azure":
        return "/azure.svg";
      case "SQL":
        return "/azure-sql.svg";
      case "Business Central":
        return "/bc.svg";
      case "CSS":
        return "/css.svg";
      case "HTML":
        return "/html.svg";
      case "JavaScript":
        return "/javascript.svg";
      case "MongoDB":
        return "/mongodb.svg";
      case "Navision":
        return "/nav.svg";
      case "Node.js":
        return "/nodejs.svg";
      case "React":
        return "/react.svg";
      case "React Native":
        return "/react-native.svg";
      default:
        return "/jk.svg";
    }
  }

  return (
    <button
      className={`d-flex align-items-center justify-content-center rounded border-0 ps-1 pe-1 me-1 mt-1 ${active ? "bg-primary text-white" : "text-muted"}`}
      onClick={onClick}
    >
      <img
        className="me-1"
        src={getImgSrc(name)}
        alt="name"
        width={12}
        height={12}
      />
      <small className="">{name}</small>
    </button>
  );
};

export default CategoryPill;
