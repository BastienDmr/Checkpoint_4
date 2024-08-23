const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import project-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/projectActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific project by ID
router.get("/:id", read);

// Route to add a new project
router.post("/", add);

router.put("/:id", edit);

router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
