const ghost = require('./core');
ghost.start({
    config: {
        url: 'http://bprts.com',
        ip: '127.0.0.1',
        port: 2368,
        database: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'your_db_user',
                password: 'your_db_password',
                database: 'your_db_name'
            },
            pool: {
                min: 5,
                max: 20,
                idle: 10000
            }
        }
    }
});
