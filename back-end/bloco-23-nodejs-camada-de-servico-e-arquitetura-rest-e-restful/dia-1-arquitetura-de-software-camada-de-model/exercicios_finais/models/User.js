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
}

module.exports={
  formatUser,
  create
}