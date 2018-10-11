const options = {
    swaggerDefinition: {
        info: {
            title: 'REST - Swagger',
            version: '1.0.0',
            description: 'REST API with Swagger doc',
            contact: {
                email: 'mateus.santos@ingaia.com.br'
            }
        },
        schemes: ['http'],
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: [
        './src/controllers/clientController.js',
        './src/models/clientModel.js',
        './src/controllers/productController.js',
        './src/models/productModel.js'
    ]
}

module.exports = options;