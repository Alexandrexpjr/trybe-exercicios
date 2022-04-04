module.exports = (req, res, next) => {
  const { username, admin } = req.user;
  return res.status(200).json({ username, admin });
}