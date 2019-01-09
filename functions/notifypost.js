'use strict';

// const user = require('../models/notify');
const user = require('../models/notifyselectpolicy');
// const user = require('../models/fetchdata');

exports.notifypost = (policyid, policyName, policycatagory, policypercentage, rules, inputradio, status, count) => {
    return new Promise((resolve, reject) => {

        const newUser = new user({

            policyid: policyid,
            policyName: policyName,
            policycatagory: policycatagory,
            policypercentage: policypercentage,
            rules: rules,
            inputradio: inputradio,
            status: status,
            count: count
        });
        newUser
            .save()

            .then((result) => resolve({
                status: 201,
                message: 'Your Request has been recieved,Waiting for Admin Approval!',
                result: result
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