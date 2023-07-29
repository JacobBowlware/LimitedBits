const cors = require('cors');

module.exports = (app) => {
    const allowedOrigins = ['http://localhost:3001', 'https://example.com'];

    // Enable CORS with specific allowed origins
    app.use(cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    }));
}