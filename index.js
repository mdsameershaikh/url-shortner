const express = require('express');
const app = express()
const port = 8001;
const {connectToMongoDb} = require('./connect')
const urlRoute = require('./routes/url')
const URL = require('./models/url')

app.use(express.json());    
  

connectToMongoDb('mongodb://127.0.0.1:27017/url-shortner').then(()=>{
    console.log('mongodb connection started')
});

app.use('/url', urlRoute);

app.get('/:shortID', async (req, res)=> {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            viewHistory: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL)

})

  

app.listen(port, ()=>{
    console.log(`server started at port ${port}` )
})
