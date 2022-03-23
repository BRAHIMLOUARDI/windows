const mongoose = require('mongoose')
const menu = require('./data')


const wordSchema = new mongoose.Schema(
  {
    English: {
      type: String,
    },
    French: {
      type: String,
    },
    Arabic: {
      type: String,
    },

  }, { collection: 'words' }
)
const wordmodel = mongoose.model('glossary', wordSchema)


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connect = async () => {
  const connection = await mongoose.connect("mongodb://127.0.0.1:27017/glossary", connectionParams)
}



module.exports = { connect, mongoose }