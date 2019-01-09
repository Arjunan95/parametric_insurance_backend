'use strict';

const user = require('../models/notifyApprovemodels');
var bcSdk = require('../fabcar/invoke')
// const user = require('../models/fetchdata');

exports.notifyApprove = (policyid, policyName, policycatagory, policypercentage, rules, inputradio, status) => {
    return new Promise((resolve, reject) => {

        const newUser = new user({

            policyid: policyid,
            policyName: policyName,
            policycatagory: policycatagory,
            policypercentage: policypercentage,
            rules: rules,
            inputradio: inputradio,
            status: status,
        });
        // newUser
        //     .save()
        bcSdk.savetransaction(newUser)
            .then(() => resolve({
                status: 201,
                message: 'Policy approved successfully!'
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