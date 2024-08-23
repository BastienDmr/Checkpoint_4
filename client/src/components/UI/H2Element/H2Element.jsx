import PropTypes from "prop-types";

import "./H2Element.css";

function H2Element({ title }) {
  return <h2 className="style-title-h2">{title}</h2>;
}

H2Element.propTypes = {
  title: PropTypes.string.isRequired,
};

export default H2Element;
