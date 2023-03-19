const DisplayImage = ({ Id, ImageUrl}) => {
  return (
    <div>
      <img
        key={Id}
        src={ImageUrl}
        alt="img-${Id}"
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
};

export default DisplayImage;
