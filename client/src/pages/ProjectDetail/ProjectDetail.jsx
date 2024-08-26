import { useLoaderData, useNavigate } from "react-router-dom";

import ModifyProject from "../../components/ModifyProject/ModifyProject";

import connexion from "../../services/connexion";
import ButtonComponent from "../../components/UI/ButtonComponent/ButtonComponent";

function ProjectDetail() {
  const { project } = useLoaderData();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await connexion.delete(`/api/project/${project.id}`);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>
      <ModifyProject projectId={project.id} />
      <ButtonComponent
        text="Supprimer"
        handleClick={handleDelete}
        btntype="button"
        css="btn"
      />
    </>
  );
}

export default ProjectDetail;
