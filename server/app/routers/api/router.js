const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const skillRouter = require("./skill/router");

router.use("/skill", skillRouter);

const profilRouter = require("./profil/router");

router.use("/profil", profilRouter);

const projectRouter = require("./project/router");

router.use("/project", projectRouter);

/* ************************************************************************* */

module.exports = router;
