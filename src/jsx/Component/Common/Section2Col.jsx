const Section2Col = ({
  title,
  content,
  imgOrContent,
  isLeft,
  containsImage,
  children,
}) => {
  return (
    <div className="section2col-container">
      {containsImage ? (
        <div
          className="img-side"
          style={{ gridColumn: isLeft ? "1/2" : "2/2" }}
        >
          <img src={imgOrContent} alt={title} />
        </div>
      ) : (
        <div
          className="common-content-side "
          style={{ gridColumn: isLeft ? "1/2" : "2/2" }}
        >
          {imgOrContent}
        </div>
      )}
      {title != "" ? (
        <div
          className="content-side"
          style={{ gridColumn: isLeft ? "2/2" : "1/2" }}
        >
          {title}
          <p>{content}</p>
          {children}
        </div>
      ) : (
        <div
          className="common-content-side "
          style={{ gridColumn: isLeft ? "2/2" : "1/2" }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Section2Col;
