var Tpa = require('../models/notify')

exports.notification = () => {
    return new Promise(async (resolve, reject) => {

        Tpa.find({
            
            
        }).then(result => {
            
            console.log(result)
            resolve({
                "status": 200,
                "patients": result
                
            })
             })

    })
}