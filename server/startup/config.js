const config = require('config');

module.exports = () => {
    const key = config.get('jwtPrivateKey');

    console.log("key: " + key);

    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}
