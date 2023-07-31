const { nanoid } = require("nanoid");
const url = require('../models/url')

async function genetateShortURL( req, res){
    const body = res.body;
    if(!body.url){
        return  res.status('400').json({error: 'url is required'})
    }
    const shortID = nanoid(8);
    await url.create({
        shortID,
        redirectURL: body.url,  
        visitedHistory: []
    });
    return res.json({id: shortID}) 
}

module.exports = {genetateShortURL  }