const SkillImage = ({ title, src }) => {
  return (
    <img
      src={src}
      width={50}
      height={50}
      alt={src}
      title={title}
      className="puff-in-center m-2"
    />
  );
};

export default SkillImage;
