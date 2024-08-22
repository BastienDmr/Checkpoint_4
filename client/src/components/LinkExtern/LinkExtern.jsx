import PropTypes from "prop-types";

import "./LinkExtern.css";

function LinkExtern({ data, text, img }) {
  return (
    <div className="link-box">
      <img src={img} alt="" />
      <a href={data} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
}

LinkExtern.propTypes = {
  data: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default LinkExtern;
