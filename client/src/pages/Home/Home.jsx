import { useLoaderData } from "react-router-dom";

import SkillsComponent from "../../components/Skills/SkillsComponent";
import ParagraphElement from "../../components/UI/ParagraphElement/ParagraphElement";
import LinkExtern from "../../components/LinkExtern/LinkExtern";
import H2Element from "../../components/UI/H2Element/H2Element";
import H3p from "../../components/UI/H3p/H3p";

import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import mail from "../../assets/images/mail.svg";
import download from "../../assets/images/download.svg";
import discord from "../../assets/images/discord.svg";

import "./Home.css";

function Home() {
  const { skills, profil, projects } = useLoaderData();

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
      <section className="link-container">
        <LinkExtern data={profil.github} text="Github" img={github} />
        <LinkExtern data={profil.linkedin} text="Linkedin" img={linkedin} />
        <LinkExtern data={`mailto:${profil.email}`} text="Gmail" img={mail} />
        <LinkExtern data={profil.discord} text="Discord" img={discord} />
        <LinkExtern data={profil.cv} text="CV" img={download} />
      </section>
      <section className="skills-container">
        <H2Element title="Skills" />
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
      <section className="project-container">
        <H2Element title="Projets" />
        <article className="project-box">
          {projects.map((project) => (
            <H3p
              id={project.id}
              title={project.title}
              text={project.subtitle}
              key={project.id}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default Home;
