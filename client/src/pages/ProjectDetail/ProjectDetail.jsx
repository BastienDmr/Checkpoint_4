import { useLoaderData, useNavigate } from "react-router-dom";

import ModifyProject from "../../components/ModifyProject/ModifyProject";

import connexion from "../../services/connexion";
import ButtonComponent from "../../components/UI/ButtonComponent/ButtonComponent";

import "./ProjectDetail.css";
import LinkExtern from "../../components/LinkExtern/LinkExtern";

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
      <section className="info">
        <h1 className="style-title-h1">{project.title}</h1>
        <p className="paragraph-style">{project.subtitle}</p>
        <LinkExtern data={project.link} text="Lien du projet" />
      </section>
      <ModifyProject projectId={project.id} />
      <div className="delete-box">
        <ButtonComponent
          text="Supprimer"
          handleClick={handleDelete}
          btntype="button"
          css=""
        />
      </div>
    </>
  );
}

export default ProjectDetail;
