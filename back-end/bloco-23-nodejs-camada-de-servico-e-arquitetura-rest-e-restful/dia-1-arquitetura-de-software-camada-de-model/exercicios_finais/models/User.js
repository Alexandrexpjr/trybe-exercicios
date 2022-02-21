const connection = require("./connection");

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
    id,
    firstName,
    lastName,
    email
  }
}

async function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const [ createUser ] = await connection.execute(query, [firstName, lastName, email, password]);
  return {
    id: createUser.insertId,
    firstName,
    lastName,
    email,
  }
};

async function listUsers() {
  const query = 'SELECT id, first_name, last_name, email FROM users';
  const [ getUsers ] = await connection.execute(query);
  return getUsers.map(formatUser)
};

async function findUser(id) {
  const query = 'SELECT id, first_name, last_name, email FROM users WHERE id=?';
  const [ getUser ] = await connection.execute(query, [parseInt(id)]);
  return getUser.map(formatUser);
};

async function change({ id, firstName, lastName, email, password }) {
  const query = `UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?`;
  await connection.execute(query, [firstName, lastName, email, password, id]);
  return await findUser(id)
}

module.exports={
  formatUser,
  create,
  listUsers,
  findUser,
  change,
}