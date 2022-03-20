const express = require('express')

const { connect } = require('./sqlconnect')
const app = express()

const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))

app.use(express.json())


app.get('/', (req, res) => {

  res.send('home1')
})


app.post('/query', async (req, res) => {

  const { word } = req.body
  console.log("jjj", word);
  const sql = await connect()
  const sqlQuery = `select * from glo where English=:1 or French=:1 or  Arabic=:1`;
  var result;
  try {
    result = await sql.execute(sqlQuery, [word])
    console.log(result);

  } catch (error) {
    console.log("select erro", error);
  }


  if (!result.rows.length) {
    return res
      .status(200)
      .json({ success: false, msg: 'word not found' })
  }
  res.status(201).json({ success: true, msg: result.rows[0] })

})



app.post('/delete', async (req, res) => {

  const { id } = req.body
  const sql = await connect()
  const sqlQuery = `delete  from glo where id=:1`;
  var result
  try {
    result = await sql.execute(sqlQuery, [id])
    console.log(result);

  } catch (error) {
    console.log("select erro", error);
  }
  if (!result.rowsAffected) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to delete the word' })
  }
  res.status(201).json({ success: true, msg: 'word deleted successfully' })

})




app.post('/create', async (req, res) => {

  const { id, English, French, Arabic } = req.body
  console.log({ id, English, French, Arabic });
  const sql = await connect()
  const sqlQuery = `insert into  glo values(:1,:2,:3,:4)`;
  var result
  try {
    result = await sql.execute(sqlQuery, [id, English, French, Arabic])
    console.log(result);

  } catch (error) {
    console.log("select erro", error);
  }

  if (!result) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to create the word' })
  }
  res.status(201).json({ success: true, msg: 'word created successfully' })

})




app.post('/update', async (req, res) => {

  const { id, English, French, Arabic } = req.body
  const sql = await connect()
  const sqlQuery = `update glo set English=:1,French=:2,Arabic=:3  where id=:4 `;
  var result
  try {
    result = await sql.execute(sqlQuery, [English, French, Arabic, id])
    console.log(result);
  } catch (error) {
    console.log("select erro", error);
  }
  if (!result.rowsAffected) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to update the word' })
  }
  res.status(201).json({ success: true, msg: 'word updeted successfully' })

})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


// req.body



// fetch('http://localhost:3000/store-data', {
//         method: 'POST',
//         // We convert the React state to JSON and send it as the POST body
//         body: JSON.stringify(this.state)
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });