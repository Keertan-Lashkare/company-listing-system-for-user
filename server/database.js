import mysql, { createConnection } from 'mysql2';

const db=createConnection({
    host:"localhost",
    user:"root",
    password:"Keertan@123",
    database:"userdb"
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database.');
  });
  export default db;