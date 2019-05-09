// importar el módulo express
var express = require('express');
var motorRender = require('express-handlebars');

var fs = require('fs');

// crear la variable app usando express
var app = express();

// configurar la carpeta public como "pública"
app.use(express.static('public'));

app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');


const MongoClient = require("mongodb").MongoClient;
const test = require("assert");
// Connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "tienda";
var database;

// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
    database = client.db(dbName);

  //client.close();
});



var productos = [];
productos.push({
    titulo: 'nevermine',
    precio: '85714312312',
    imagen: '/images/baby.png',
    descripcion: 'Si te has decidido a tener un perro, seguro que antes de comprar –o mejor, adoptar- a tu nueva mascota, tendrás qué decidir qué raza prefieres en función de tu modo de vida y tu propia personalidad. Hay perros de carácter más agresivo o dominante, otros mansos y alegres, algunos necesitan mucho espacio para correr y jugar, otros son más tranquilos…',
    disponible: true,
});
productos.push({
    titulo: 'Gato',
    precio: '8571431231200000',
    imagen: 'https://www.feelcats.com/blog/wp-content/uploads/2018/10/gato-atigrado.jpg',
    descripcion: 'Esa preciosa combinación de patrones jaspeados, moteados o rayados en diferentes tonos, nos da a la idea de una genética caprichosa, que te contaremos, en este original artículo sobre ellos, pero además nos adentraremos en su carácter y peculiaridades, de estos gatos atigrados tan comunes, pero a la vez, tan únicos. ¿empezamos?',
    disponible: false,
});

// configurar la ruta inicial

// configurar la ruta portafolio
app.get('/tienda', function(request, response){

    
  let coleccion = database.collection("productos");
  
  coleccion.find({}).toArray(function(err, items) {
    test.equal(null, err);
    items.forEach(function(item) {
      console.log(item);
    });
  });
    response.render('tienda', productos[0]);
});

// iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});