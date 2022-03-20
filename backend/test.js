

const oracledb = require('oracledb');
oracledb.autoCommit = true;

var password = '123456'
// checkConnection async function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
      user: "pfe",
      password: password,
      connectString: "127.0.01:1521/XE"
    });
    // await connection.execute(`CREATE TABLE employees(id NUMBER, name VARCHAR2(50), email VARCHAR2(100) )`);
    const sqlQuery = `INSERT INTO employees VALUES (:1,:2, :3)`;

    binds = [[1, 'test001', 'test001@email.com'],
    [2, 'test002', 'test002@email.com'],
    [3, 'test003', 'test003@email.com']];

    result = await connection.executeMany(sqlQuery, binds, {});

    console.log("Number of inserted rows:", result.rowsAffected);
    console.log('connected to database');

  } catch (err) {
    console.error("jkkk", err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();








