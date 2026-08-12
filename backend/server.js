const dotenv = require('dotenv');
const app = require('./app');

// HANDLE UNCOUGHT EXCEPTION
process.on('uncaughtException', err => {
    console.log('UNCOUGHT EXCEPTION!! Shutting Down!!!');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});

// HANDLE UNDAHDLED REJECTION
process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('UNDAHDLED REJECTION!! Shutting Down!!!');
    server.close(() => {
        process.exit(1);
    });
});