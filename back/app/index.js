const express = require('express');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');
const cors = require('cors');

const app = express();
const port = 3000;

// Ajouter le middleware CORS
app.use(cors());

const pool = mariadb.createPool({
  host: 'db',
  user: 'root',
  password: 'secret',
  database: 'frostyfinds',
  connectionLimit: 5
});

// Création de la table users si elle n'existe pas
pool.getConnection().then(async conn => {
    try {
      await conn.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT NOT NULL AUTO_INCREMENT,
          username VARCHAR(50) NOT NULL,
          email VARCHAR(50) NOT NULL,
          password VARCHAR(50) NOT NULL,
          role VARCHAR(50) NOT NULL DEFAULT 'user',
          PRIMARY KEY (id),
          UNIQUE KEY (username)
        )
      `);
      console.log('Table users créée ou déjà existante');
    } catch (error) {
      console.log(error);
    } finally {
      conn.release();
    }
  });
  

app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const conn = await pool.getConnection();
  try {
    const results = await conn.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`);
    if (results.length > 0) {
      const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const user = results[0];
      const response = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: token
      };
      res.json(response);
    } else {
      res.status(401).send('Unauthorized');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  } finally {
    conn.release();
  }
});

app.get('/api/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const conn = await pool.getConnection();
  try {
    const results = await conn.query(`SELECT * FROM users WHERE id = '${userId}'`);
    if (results.length > 0) {
      const user = results[0];
      const response = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      };
      res.json(response);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  } finally {
    conn.release();
  }
});

app.get('/api/users', async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const results = await conn.query(`SELECT * FROM users`);
    const users = results.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    }));
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  } finally {
    conn.release();
  }
});


app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log('username:', username);
  console.log('email:', email);
  console.log('password:', password);

  const conn = await pool.getConnection();
  try {
    const results = await conn.query(`SELECT * FROM users WHERE username = '${username}'`);
    console.log('results:', results);
    if (results.length > 0) {
      res.status(409).send('Conflict');
    } else {
      const result = await conn.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`);
      console.log('insert result:', result);
      const userId = result.insertId;
      const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const response = {
        id: userId,
        username: username,
        email: email,
        role: 'user',
        token: token
      };
      res.json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  } finally {
    conn.release();
  }
});

app.listen(port, () => console.log(`API server listening on port ${port}`));