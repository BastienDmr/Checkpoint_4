import PropTypes from "prop-types";

import cvBastien from "../../assets/CvBastien2024.pdf";
import "./LinkExtern.css";

function LinkExtern({ data, text, img }) {
  const cv = text.includes("CV");

  return (
    <div className="link-box">
      <a
        href={cv ? cvBastien : { data }}
        target="_blank"
        rel="noopener noreferrer"
        download={cv ? "CV_Bastien_Domer.pdf" : undefined}
      >
        <img src={img} alt="" />
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
