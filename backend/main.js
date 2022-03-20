const express = require('express')
const app = express()
const oracledb = require('oracledb');
var password = '123456'
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
      user: "pfe",
      password: password,
      connectString: "127.0.01:1521/XE"
    });
    const users = await connection.execute('select * from more', [], function (err, result) {
      if (err) { error = err; return; }

      let user = result;
      error = null;

      return user
    })
    console.log('connected to database');
    console.log(users);
    return users;
  } catch (err) {
    console.error("jkkk", err.message);
  } finally {
    // if (connection) {
    //   try {
    //     // Always close connections
    //     await connection.close();
    //     console.log('close connection success');
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // }
  }
}
app.get('/', async (req, res) => {




  const data = await checkConnection();
  console.log(data);
  res.json({ data: data })



})

app.listen(5000)

// const oracledb = require('oracledb');

// var password = '123456'
// // checkConnection async function
// async function checkConnection() {
//   try {
//     connection = await oracledb.getConnection({
//       user: "pfe",
//       password: password,
//       connectString: "127.0.01:1521/XE"
//     });
//     connection.execute('select * from more', [], function (err, result) {
//       if (err) { error = err; return; }

//       user = result;
//       error = null;
//       console.log(user);
//     })
//     console.log('connected to database');
//   } catch (err) {
//     console.error("jkkk", err.message);
//   } finally {
//     // if (connection) {
//     //   try {
//     //     // Always close connections
//     //     await connection.close();
//     //     console.log('close connection success');
//     //   } catch (err) {
//     //     console.error(err.message);
//     //   }
//     // }
//   }
// }

// checkConnection();