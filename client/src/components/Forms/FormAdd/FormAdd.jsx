import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputComponent from "../../UI/InputComponent/InputComponent";
import SubmitComponent from "../../UI/ButtonComponent/SubmitComponent";

import connexion from "../../../services/connexion";

import "./FormAdd.css";

const initialProject = {
  title: "",
  subtitle: "",
  link: "",
  profil_id: 1,
};

function FormAdd() {
  const [project, setProject] = useState(initialProject);
  const navigate = useNavigate();

  const handleProjectCreate = (event) => {
    const { name, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmitCreateProject = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/api/project/", project);
      navigate("/");
    } catch (error) {
      setProject(initialProject);
    }
  };

  return (
    <div className="project-form">
      <form>
        <InputComponent
          label="Titre"
          inputType="text"
          id="Titre"
          inputName="title"
          inputValue={project.title}
          handleChange={handleProjectCreate}
          classBox="input-project"
          isRequired
        />
        <InputComponent
          label="Description"
          inputType="text"
          id="Description"
          inputName="subtitle"
          inputValue={project.subtitle}
          handleChange={handleProjectCreate}
          classBox="input-project-desc"
          isRequired
        />
        <InputComponent
          label="Lien"
          inputType="text"
          id="Lien"
          inputName="link"
          inputValue={project.link}
          handleChange={handleProjectCreate}
          classBox="input-project"
          isRequired
        />
        {/* Bouton pour soumettre le formulaire */}
        <SubmitComponent
          text="Ajouter"
          handleClick={handleSubmitCreateProject}
          css=""
        />
      </form>
    </div>
  );
}

export default FormAdd;
