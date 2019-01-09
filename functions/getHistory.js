var bcSdk = require('../fabcar/query');


exports.getHistory = (userId) => {
    return new Promise((resolve, reject) => {

            bcSdk.getHistory({
                    userId: userId
                })


                .then((docs) => {
                    console.log("out from chain", docs)
                
                    if(docs[0]==undefined){
                        return resolve({
                            status:400,
                            "message":"Record does not exits "

                        });
                     } else {

                    return resolve({
                        status: 201,
                        docs: docs,

                    })
                }
                   
                })
        })

        .catch(err => {

            console.log("error occurred" + err);

            return reject({
                status: 500,
                message: 'Internal Server Error !'
            });
        })

};