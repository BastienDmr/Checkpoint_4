create table project (
  id int primary key auto_increment not null,
  title VARCHAR(255),
  subtitle longtext not null,
  link VARCHAR (255)
);

CREATE TABLE category (
  id int primary key auto_increment not null,
  label VARCHAR(255) not NULL
);

create table skill (
  id int primary key auto_increment not null,
  skill VARCHAR(255),
  category_id INT not null,
  Foreign Key (category_id) REFERENCES category(id)
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
  admin BOOLEAN,
  skill_id int ,
  project_id int, 
  Foreign Key (project_id) REFERENCES project(id),
  Foreign Key (skill_id) REFERENCES skill(id)
);


INSERT INTO project (title, subtitle, link) VALUES ("Book Of Wilders", "Ce projet est un site web structuré avec HTML, CSS, et JavaScript. Ceci est mon premier projet de formation.", "https://github.com/BastienDmr/projetBookWilders");
INSERT INTO project (title, subtitle, link) VALUES ("Wilders Movies Club", "Ce projet a été mon premier projet React. Réalisé lors de ma formation a la Wild Code School.", "https://github.com/BastienDmr/Wilders-Movies-Club");
INSERT INTO project (title, subtitle, link) VALUES ("Galactic Fight", "Projet Le dépôt GitHub Galactic-Fight est un projet de développement web utilisant le framework Harmonia, une base pour les projets suivant la stack React-Express-MySQL. Il inclut des outils comme Vite pour le client React, et des scripts pour la migration et le seed de base de données. Le projet est configuré pour être déployé via Docker et Traefik, facilitant la gestion des environnements et des variables spécifiques.", "https://github.com/ITrogg/Galactic-Fight");
INSERT INTO project (title, subtitle, link) VALUES ("Voyage Voyage", "Ce projet a été mon 2ème Hackathon. Réalisé lors de ma formation a la Wild Code School.", "https://github.com/DylanRobinaud/hackathon-II-VoyageVoyage");
INSERT INTO project (title, subtitle, link) VALUES ("Externatic", "Ce projet a été mon dernier projet a la Wild Code School. Celui qui ma permis de validé mescompetences de dévellopeur fullstack.", "https://github.com/WildCodeSchool-2024-02/JS-RMT-Julien-Externatic-P3");

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

INSERT INTO profil (firstname, lastname, email, password, photo, cv, github, linkedin, admin) VALUES ("Bastien", "Domer", "domer.bastien@gmail.com", "12345", "photo","cv", "https://github.com/BastienDmr", "https://www.linkedin.com/in/bastien-domer/", true);