const express = require('express');
const cors = require('cors')
const db = require('./dbConnection');
const userObj = require('./userModel');
const app = express();

app.use(cors());

const port = 3000;
db.getDBConnection()
  .then(() => console.log('connected to mongoDB...'))
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port number ${port}...`);
    });
  })
  .catch(err => console.log('database not connected', err));

app.use(express.json());

//= ============Get All Users==============================
app.get('/api/users', async (request, response) => {
    const users = await userObj.getUsers();
    response.json(users);
  });
  
  //= =================Add New Users=========================
  app.post('/api/users', (request, response) => {
      const newUser = userObj.addUser(request.body);
      response.json(newUser);
  });

