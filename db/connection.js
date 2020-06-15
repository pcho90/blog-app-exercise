const mongoose = require('mongoose');

// mongodb+srv://pwoke:project@cluster0-elcuu.mongodb.net/blogAppDatabase?retryWrites=true&w=majority

const MONGO_URI =
  process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/blogAppDatabase';

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.error(err.message));

module.exports = mongoose.connection;
