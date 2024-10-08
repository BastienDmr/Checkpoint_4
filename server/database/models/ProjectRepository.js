const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "project" as configuration
    super({ table: "project" });
  }

  // The C of CRUD - Create operation

  // INSERT INTO project (title, subtitle,link,profil_id) VALUES ("Bobo", "Voyageur", "https://exemple", 1)

  async create(project) {
    // Execute the SQL INSERT query to add a new project to the "project" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, subtitle,link,profil_id) values (?, ?, ?, ?)`,
      [project.title, project.subtitle, project.link, project.profil_id]
    );

    //   // Return the ID of the newly inserted user
    return result.insertId;
  }
  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific project by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the project
    return rows[0];
  }

  async readAll(profilId) {
    // Execute the SQL SELECT query to retrieve all projects from the "project" table
    const [rows] = await this.database.query(
      `select * from project WHERE profil_id = ?`,
      [profilId]
    );

    // Return the array of projects
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing project

  async update(project) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      "UPDATE project SET title = ?, subtitle = ? WHERE id = ?",
      [project.title, project.subtitle, project.id]
    );
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an project by its ID

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific user
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = ProjectRepository;
