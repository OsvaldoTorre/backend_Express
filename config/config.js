const dotenv =  require('dotenv');
dotenv.config();

const config = {
    databaseURL: process.env.DATABASEURL
}
module.exports = config;