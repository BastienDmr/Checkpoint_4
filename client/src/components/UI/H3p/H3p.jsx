import PropTypes from "prop-types";

import "./H3p.css";

function H3p({ title, text }) {
  const truncateText = (textDiv, maxLength = 168) => {
    if (textDiv.length > maxLength) {
      return `${textDiv.slice(0, maxLength)}...`;
    }
    return text; // Retourne le texte original si sa longueur est inférieure ou égale à maxLength
  };

  // Appel de la fonction truncateText avec le texte à tronquer
  const truncatedText = truncateText(text);

  return (
    <div className="project-case">
      <h3 className="style-title-h3">{title}</h3>
      <p className="paragraph-style">{truncatedText}</p>
    </div>
  );
}

H3p.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default H3p;
