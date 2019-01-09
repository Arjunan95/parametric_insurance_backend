'use strict';

const user = require('../models/createpolicymodels');
// const user = require('../models/fetchdata');

exports.captiveCreatePolicy = (policyId,policyName, policycatagory, rules, policypercentage, inputradio) => {
    return new Promise((resolve, reject) => {

        const newUser = new user({

            policyId: policyId,
            policyName: policyName,
            policycatagory: policycatagory,
            rules: rules,
            policypercentage: policypercentage,
            inputradio: inputradio,
        });
        newUser
            .save()

            .then((result) => resolve({
                
                status: 201,
                message: 'Policy created Sucessfully !',
                result:result
            }))

            // .then(() => bcSdk.createUser({
            //     user: users,
            //     UserDetails: newUser
            // }))

            .catch(err => {

                if (err.code == 11000) {

                    reject({
                        status: 409,
                        message: 'User Already Registered !'
                    });

                } else {

                    reject({
                        status: 500,
                        message: 'Internal Server Error !'
                    });
                }
            });

    });
}