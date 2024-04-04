const models = require('../models');


function save(req,res){
    const post = {
        district: req.body.district,
        temperature: req.body.temperature, 
        Humidity: req.body.Humidity,
        air_pressure:req.body.air_pressure,
        userID: 1
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Data Added Successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Somthing went wrong",
            error: error
        });
    });
}

module.exports = {
    save: save
    
}