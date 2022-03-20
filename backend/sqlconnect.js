const oracledb = require('oracledb');
oracledb.autoCommit = true;

const connect = async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
      user: "pfe",
      password: '123456',
      connectString: "127.0.01:1521/XE"
    });

  } catch (error) {
    console.log("sqlerror", error);
  }


  return connection
}

module.exports = { connect }