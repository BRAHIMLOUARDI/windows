const express = require('express')

const { connect, mongoose } = require('./mongoconnection.js')
const app = express()

const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:42715',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

connect()
const wordmodel = mongoose.model('glossary')


app.get('/', (req, res) => {

  res.send('home')
})


app.post('/query', async (req, res) => {
  const { word } = req.body

  const doc = await wordmodel.findOne({ $or: [{ French: word }, { English: word }, { Arabic: word }] })
  console.log(doc);
  if (!doc) {
    return res
      .status(400)
      .json({ success: false, msg: 'word not found' })
  }
  res.status(201).json({ success: true, data: doc })

})



app.post('/delete', async (req, res) => {
  const { _id } = req.body
  var resulte
  try {
    resulte = await wordmodel.deleteOne({ _id: _id })
    console.log(resulte);
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to delete the word' })
    console.log(error);
  }

  if (!resulte.deletedCount) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to delete the word' })
  }
  res.status(201).json({ success: true, msg: 'word deleted successfully' })

})




app.post('/create', async (req, res) => {

  const { English, French, Arabic } = req.body
  // console.log({ id, English, French, Arabic });
  const doc = { English: English, French: French, Arabic: Arabic }
  var resulte
  try {
    resulte = await wordmodel.create(doc)
    console.log(resulte);
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to create the word' })

  }


  if (!resulte) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to create the word' })
  }
  res.status(201).json({ success: true, msg: 'word created successfully' })

})




app.post('/update', async (req, res) => {

  const { _id, English, French, Arabic } = req.body
  const doc = { English: English, French: French, Arabic: Arabic }
  var resulte
  try {
    resulte = await wordmodel.findByIdAndUpdate(_id, doc, { new: true, runValidators: true })

  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to update the word' })
  }

  if (!resulte) {
    return res
      .status(400)
      .json({ success: false, msg: 'failed to update the word' })
  }
  res.status(201).json({ success: true, msg: 'word updeted successfully' })

})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

