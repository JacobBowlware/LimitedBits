require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');

module.exports = () => {
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }), // Now someone running this on a different machine can see the errors.
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.add(new winston.transports.MongoDB({
        db: 'mongodb://localhost/limited-bits',
        level: 'error'
    }));

}