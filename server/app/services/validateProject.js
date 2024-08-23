const Joi = require("joi");

const profilSchema = Joi.object({
  title: Joi.string().max(255).required(),
  subtitle: Joi.string().required(),
});

const validateProfil = (req, res, next) => {
  const { error } = profilSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(422).json({ validationErrors: error.details });
  }
};

module.exports = validateProfil;
