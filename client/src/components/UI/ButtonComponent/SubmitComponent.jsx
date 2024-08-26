import PropTypes from "prop-types";

import "./ButtonComponent.css";

function SubmitComponent({ text, handleClick, css }) {
  return (
    <button type="submit" className={`btn ${css}`} onClick={handleClick}>
      {text}
    </button>
  );
}

SubmitComponent.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  css: PropTypes.string.isRequired,
};

export default SubmitComponent;
