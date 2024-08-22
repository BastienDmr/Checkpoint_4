import { useLoaderData } from "react-router-dom";
import SkillsComponent from "../../components/Skills/SkillsComponent";

import "./Home.css";

function Home() {
  const skillsdata = useLoaderData();

  // Crée un objet pour regrouper les compétences par catégorie
  const skillsByCategory = skillsdata.reduce((acc, skill) => {
    if (!acc[skill.label]) {
      acc[skill.label] = [];
    }
    acc[skill.label].push(skill.skill);
    return acc;
  }, {});

  return (
    <>
      <h1 className="style-title-h1">Projet Bastien</h1>
      <section className="skills-container">
        <h2 className="style-title-h2">Skills</h2>
        <article className="skills-article">
          {Object.keys(skillsByCategory).map((category) => (
            <SkillsComponent
              key={category}
              category={category}
              skills={skillsByCategory[category]}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default Home;
