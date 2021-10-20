import "./button.css";

const Button = ({ label = "Click Here", onPress = () => {} }) => {
  return (
    <button className="button" onClick={onPress}>
      {label}
    </button>
  );
};

export default Button;
