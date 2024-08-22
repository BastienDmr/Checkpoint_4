import { useLoaderData } from "react-router-dom";
import SkillsComponent from "../../components/Skills/SkillsComponent";

import "./Home.css";
import ParagraphElement from "../../components/UI/ParagraphElement/ParagraphElement";

function Home() {
  const { skills, profil } = useLoaderData();

  // Crée un objet pour regrouper les compétences par catégorie
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.label]) {
      acc[skill.label] = [];
    }
    acc[skill.label].push(skill.skill);
    return acc;
  }, {});

  return (
    <>
      <section className="bio-container">
        <ParagraphElement className="style-title-h3" data="Bonjour à tous !" />
        <h1 className="style-title-h1">
          Je suis {profil.firstname} {profil.lastname}
        </h1>
        <p className="style-title-h3">
          <span>Développeur Web </span>, Créateur de projets.
        </p>
        <ParagraphElement
          className="style-title-h3"
          data="Vous avez un projet web ? Je le transforme en succès en ligne."
        />
      </section>
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
