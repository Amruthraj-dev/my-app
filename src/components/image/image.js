export const ImageComponent = (props) => {
  const { src, width, height, alt } = props;
  return (
    <div>
      <img src={src} width={width} height={height} alt={alt} />
    </div>
  );
};
