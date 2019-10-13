const mongoose = require('mongoose')

mongoose.connection.once('open', () => {
  console.log('successfully connected to the database!')
})
mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
)

module.exports = async () => {
  await mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
