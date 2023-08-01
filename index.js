const express = require('express');
const app = express()
const port = 8001;
const {connectToMongoDb} = require('./connect')
const urlRoute = require('./routes/url');

connectToMongoDb('mongodb://127.0.0.1:27017/url-shortner').then(()=>{
    console.log('mongodb connection started')
});
app.use('/url', urlRoute);
app.listen(port, ()=>{
    console.log(`server started at port ${port}` )
})
