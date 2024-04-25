require('dotenv').config();

module.exports = {
    development:{
        client: 'mssql',
        connection: {
            server: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            options:{
                port:parseInt(process.env.DB_PORT),
                encrypt:false,
            },
        },
    },
};