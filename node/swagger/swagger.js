const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AnimeVietsub API Documentation',
      version: '1.0.0',
      description: 'API cho hệ thống xem phim AnimeVietsub',
      contact: {
        name: 'API Support',
        email: 'support@animevietsub.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  apis: [
    './swagger/schemas/*.js',
    './swagger/paths/*.js',
    './routes/*.js'
  ]
};

const specs = swaggerJsdoc(options);

module.exports = specs;