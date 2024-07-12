const ButtonComponent = (props) => {
  const { text, onPress, bgColor } = props;

  return (
    <button
      className="btn btn-primary btn-lg"
      onClick={onPress}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
