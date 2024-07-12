export const Heading3 = (props) => {
  const { title, Color } = props;
  return <h3 style={{ color: Color }}>{title}</h3>;
};
export const Heading2 = () => {
  return <h2 style={{ color: "red" }}>Heading2</h2>;
};
export const Heading1 = (prop) => {
  const { title } = prop;
  return <h1>{title}</h1>;
};
export const Heading4 = () => {
  return <h4>Heading1</h4>;
};
export const Heading5 = () => {
  return <h5>Heading5</h5>;
};
export const Heading6 = () => {
  return <h6>Heading6</h6>;
};
