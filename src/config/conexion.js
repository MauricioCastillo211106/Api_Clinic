const express = require('express');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '52.54.125.19',
  user: 'securide',
  password: 'password',
  database: 'integrador'
});
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
});

module.exports = connection;