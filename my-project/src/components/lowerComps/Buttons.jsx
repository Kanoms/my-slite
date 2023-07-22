import PropTypes from "prop-types";

const Buttons = ({ text, className }) => {
  return <button className={`${className}`}>{text}</button>;
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Buttons;
