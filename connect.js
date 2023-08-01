const mongoose = require('mongoose');

async function connectToMongoDb(url){
    mongoose.connect(url);
} 

module.exports = {
    connectToMongoDb
}