
CREATE TABLE category (
  id int primary key auto_increment not null,
  label VARCHAR(255) not NULL
);

create table profil (
  id int primary key auto_increment not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  photo varchar(255),
  cv varchar(255),
  github VARCHAR(255),
  linkedin VARCHAR(255),
  discord VARCHAR(255),
  admin BOOLEAN
);

create table skill (
  id int primary key auto_increment not null,
  skill VARCHAR(255),
  category_id INT not null,
  Foreign Key (category_id) REFERENCES category(id)
);


create table project (
  id int primary key auto_increment,
  title VARCHAR(255),
  subtitle longtext not null,
  link VARCHAR (255),
  profil_id int not null,
  Foreign Key (profil_id) REFERENCES profil(id)
);

CREATE TABLE profil_skill (
  profil_id int,
  skill_id int,
  Foreign Key (profil_id) REFERENCES profil(id),
  Foreign Key (skill_id) REFERENCES skill(id)
);

INSERT INTO category (label) VALUES ("Front-End");
INSERT INTO category (label) VALUES ("Back-End");
INSERT INTO category (label) VALUES ("Design");
INSERT INTO category (label) VALUES ("Autres");

INSERT INTO skill (skill, category_id) VALUES ("Figma", 3 );
INSERT INTO skill (skill, category_id) VALUES ("Krita", 3);
INSERT INTO skill (skill, category_id) VALUES ("React", 1);
INSERT INTO skill (skill, category_id) VALUES ("Javascript", 1);
INSERT INTO skill (skill, category_id) VALUES ("Typescript", 1);
INSERT INTO skill (skill, category_id) VALUES ("SCSS", 1);
INSERT INTO skill (skill, category_id) VALUES ("Node JS", 2);
INSERT INTO skill (skill, category_id) VALUES ("Express", 2);
INSERT INTO skill (skill, category_id) VALUES ("MySQL", 2);
INSERT INTO skill (skill, category_id) VALUES ("CRUD", 2);
INSERT INTO skill (skill, category_id) VALUES ("Argon2", 2);
INSERT INTO skill (skill, category_id) VALUES ("Git", 4);
INSERT INTO skill (skill, category_id) VALUES ("Github", 4);
INSERT INTO skill (skill, category_id) VALUES ("Méthode Agile", 4);

INSERT INTO profil (firstname, lastname, email, password, photo, cv, github, linkedin, discord, admin) VALUES ("Bastien", "Domer", "domer.bastien@gmail.com", "12345", "photo","cv", "https://github.com/BastienDmr", "https://www.linkedin.com/in/bastien-domer/", "discord", true);
INSERT INTO project (title, subtitle, link, profil_id) VALUES ("Book Of Wilders", "Ce projet est un site web structuré avec HTML, CSS, et JavaScript. Ceci est mon premier projet de formation.", "https://github.com/BastienDmr/projetBookWilders", 1);
INSERT INTO project (title, subtitle, link, profil_id) VALUES ("Wilders Movies Club", "Ce projet a été mon premier projet React. Réalisé lors de ma formation a la Wild Code School.", "https://github.com/BastienDmr/Wilders-Movies-Club", 1);
INSERT INTO project (title, subtitle, link, profil_id) VALUES ("Galactic Fight", "Projet Le dépôt GitHub Galactic-Fight est un projet de développement web utilisant le framework Harmonia, une base pour les projets suivant la stack React-Express-MySQL. Il inclut des outils comme Vite pour le client React, et des scripts pour la migration et le seed de base de données. Le projet est configuré pour être déployé via Docker et Traefik, facilitant la gestion des environnements et des variables spécifiques.", "https://github.com/ITrogg/Galactic-Fight", 1);
INSERT INTO project (title, subtitle, link, profil_id) VALUES ("Voyage Voyage", "Ce projet a été mon 2ème Hackathon. Réalisé lors de ma formation a la Wild Code School.", "https://github.com/DylanRobinaud/hackathon-II-VoyageVoyage", 1);
INSERT INTO project (title, subtitle, link, profil_id) VALUES ("Externatic", "Ce projet a été mon dernier projet a la Wild Code School. Celui qui ma permis de validé mescompetences de dévellopeur fullstack.", "https://github.com/WildCodeSchool-2024-02/JS-RMT-Julien-Externatic-P3", 1);

INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 1);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 2);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 3);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 4);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 5);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 6);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 7);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 8);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 9);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 10);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 11);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 12);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 13);
INSERT INTO profil_skill (profil_id, skill_id) VALUES (1, 14);
