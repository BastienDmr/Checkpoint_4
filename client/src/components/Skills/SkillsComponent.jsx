import PropTypes from "prop-types";

function SkillsComponent({ category, skills }) {
  return (
    <div>
      <h3>{category}</h3>
      {skills.map((skill) => (
        <li key={`${category}-${skill}`}>{skill}</li>
      ))}
    </div>
  );
}

SkillsComponent.propTypes = {
  category: PropTypes.string.isRequired, // 'category' doit être une chaîne de caractères
  skills: PropTypes.arrayOf(PropTypes.string).isRequired, // 'skills' doit être un tableau de chaînes de caractères
};

export default SkillsComponent;
