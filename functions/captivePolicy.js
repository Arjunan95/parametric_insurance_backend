var captivepolicy = require('../models/createpolicymodels')
//var hold = require('../models/hold')

exports.getcaptivepolicydetails = () => {
    return new Promise(async (resolve, reject) => {
        captivepolicy.find({})
            .then(result => {
                console.log("len", result)
                resolve({
                    "status": 200,
                    "captivepolicy": result
                })
            })
        //console.log("arjun",result)


    })
}