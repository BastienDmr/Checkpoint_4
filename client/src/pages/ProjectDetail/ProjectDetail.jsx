import { useLoaderData, useNavigate } from "react-router-dom";

import connexion from "../../services/connexion";

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
      <h1>ProjectDetail</h1>
      <p>fd</p>
      <button type="button" onClick={handleDelete} className="btn">
        Supprimer
      </button>
    </>
  );
}

export default ProjectDetail;
