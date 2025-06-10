// Requiriendo las dependencias necesarias
var express = require('express');
var cors = require('cors');
var path = require('path'); 
var mysql = require('mysql2');
var { createConnection } = require('mysql2');

// Crear una instancia de la aplicación Express
var app = express();

// Usar CORS para permitir solicitudes desde el puerto 5500 (o el origen de tu frontend)
app.use(cors({
    origin: 'http://127.0.0.1:5500',
}));


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hector.2008',
    database: 'juego_de_memoria'
  });
  
  // Conectar a la base de datos
  db.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
      return;
    }
    console.log('Conexión a la base de datos establecida');
  });

  db.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Error en la conexión con MySQL:', err);
    } else {
      console.log('Conexión con MySQL funcionando correctamente');
    }
  });
  
  
  // Configurar el puerto en el que se escucharán las solicitudes
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
  
  module.exports = app;
  