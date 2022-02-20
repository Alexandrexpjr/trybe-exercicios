const errorMessage = (field) => {
  return { "error": true, "message": `O campo ${field} é obrigatório` }
}

const errorMid = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  switch(true) {
    case (!firstName): return res.status(400).json(errorMessage('firstName'));
    case (!lastName): return res.status(400).json(errorMessage('lastName'));
    case (!email): return res.status(400).json(errorMessage('email'));
    case (!password): return res.status(400).json(errorMessage('password'));
    case (password.length < 6): return res.status(400).json({ "error": true, "message": "O campo 'password' deve ter pelo menos 6 caracteres" });
    default: return next();
  }
}

module.exports = {
  errorMid
}