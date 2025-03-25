Para iniciar el servidor
node server.js

Para la prueba de conexión con el servidor
node seed.js

backend/
│
├── .env # Variables de entorno (por ejemplo, URL de MongoDB)
├── server.js # Archivo principal donde se inicia el servidor Express
├── models/ # Carpeta para modelos Mongoose
│ └── Product.js # Modelo de ejemplo
├── routes/ # Carpeta para rutas de API
│ └── productRoutes.js # Rutas para los productos
└── package.json # Dependencias y scripts del proyecto
