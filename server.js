const express = require('express');
const db = require('./db')
const cors = require('cors');
const router = require('./network/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const dbUrl = 'mongodb+srv://donremolopizza:vZEzLEVqLToZaSSq@donremopi.duzmeur.mongodb.net/test';

db(dbUrl)
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
  });

router(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
