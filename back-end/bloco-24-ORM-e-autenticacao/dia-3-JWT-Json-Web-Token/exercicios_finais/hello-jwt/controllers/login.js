const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) => {
  return Joi.object({
    username: Joi.string().min(5).alphanum().required().messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min':'"password" length must be 5 characters long',
      'string.required':'"password" is required',
    }),
  }).validate(body);
}

module.exports = async (req, res, next) => {
  console.log(validateBody(req.body));
  const { error } = validateBody(req.body);
  if (error) return next(error);

  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
  const payload = {
    username: req.body.username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token })
}