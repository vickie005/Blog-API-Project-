const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validateResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      errors: error.array(),
    });
  }
  next();
};
module.exports = validate;
