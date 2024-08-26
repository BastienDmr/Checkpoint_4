import { useState } from "react";

import PropTypes from "prop-types";

import InputComponent from "../UI/InputComponent/InputComponent";
import SubmitComponent from "../UI/ButtonComponent/SubmitComponent";

import connexion from "../../services/connexion";
import "./ModifyProject.css";

function ModifyProject({ projectId }) {
  const [project, setProject] = useState("");

  const handleProjectChange = (event) => {
    const { name, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmitModify = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/api/project/${projectId}`, project);
    } catch (error) {
      console.error("There was an error updating the project!", error);
    }
    setProject((prev) => ({
      ...prev,
    }));
  };

  return (
    <div className="form-project">
      <h1 className="style-title-h3">Modifier le projet</h1>
      <form onSubmit={handleSubmitModify}>
        <legend className="legend-form">Modification du projet</legend>
        <InputComponent
          label="Titre"
          inputType="text"
          id="Titre"
          inputName="title"
          inputValue={project.title}
          handleChange={handleProjectChange}
          classBox="input-project"
          isRequired
        />
        <InputComponent
          label="Description"
          inputType="text"
          id="Description"
          inputName="subtitle"
          inputValue={project.subtitle}
          handleChange={handleProjectChange}
          classBox="input-project"
          isRequired
        />
        <SubmitComponent
          text="Modifiez"
          handleClick={handleSubmitModify}
          css="submit"
        />
      </form>
    </div>
  );
}

ModifyProject.propTypes = {
  projectId: PropTypes.number.isRequired,
};

export default ModifyProject;
