'use strict';
const policy1 = require('../models/policy1');
var bcSdk = require('../fabcar/invoke')

exports.policy1 = (policyID, policys) => {

    return new Promise((resolve, reject) => {

        var data1 = {
            "TransactionDetails": {
                "userId": policyID,
                "transactionstring": policys
            }
        }
        // data.save()
        bcSdk.savetransaction(data1)
        .then((response) => {

            console.log(response)
            resolve({
                status: 201,
                 message: 'Contract details saved'
            })
        })
        .catch(err => {
            reject({
                status: 500,
                message: 'Internal Server Error !'
            });
        });

    })
}