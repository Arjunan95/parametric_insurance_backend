'use strict';
var Patient = require('../models/Tpa');
var hold = require('../models/hold')
var bcSdk = require('../fabcar/invoke')

exports.autotpa = (s, claimamount, claimAmount, submitID) => {
    console.log("claimamount", claimamount)
    console.log("claimAmount", claimAmount)

    return new Promise((resolve, reject) => {

        if (claimAmount > claimamount) {

            var data = new hold({

                "patientData": s,
                "submitID": submitID,
                "claimAmount": claimAmount,
                "status": "waiting for TPA approval",
                "message": "Hold",
                "Expenses": claimamount,
                "AmountPayerWouldPay": "hold",
                "AmountuserHavetopay": "hold",

                created_at: new Date()
            });
            console.log("discharge summary====================>", data)
          
            var ldata = {
                updatedetails: {

                    "userId": submitID,
                    "transactionstring": data

                }
            }

            data.save()

                .then(
                    bcSdk.updatetransaction(ldata))

                .then(function(docs) {
                    if (docs.response == "record already exist!") {
                        console.log(docs.response)
                        resolve({
                            "status": 200,
                            "message": "details saved"
                        })
                    } else {
                        resolve({
                            "status": 200,
                            docs: docs
                        });
                    }
                })


                .catch(err => {

                    if (err.code == 11000) {

                        reject({
                            status: 409,
                            message: 'User Already Registered !'
                        });

                    }
                });




        } else {
            var data = new Patient({

                "patientData": s,

                "submitID": submitID,
                "claimAmount": claimAmount,
                "status": "Auto approved",
                "message": "approved",
                "Expenses": claimamount,
                "AmountPayerWouldPay": claimamount,
                "AmountuserHavetopay": claimAmount - claimamount,

                created_at: new Date()
            });

           
            var ldata = {
                updatedetails: {

                    "userId": submitID,
                    "transactionstring": data

                }
            }
            data.save()
            .then(
                bcSdk.updatetransaction(ldata))

                .then(function(docs) {
                    if (docs.response == "record already exist!") {
                        console.log(docs.response)
                        resolve({
                            "status": 200,
                            "message": "details saved"
                        })
                    } else {
                        resolve({
                            "status": 200,
                            docs: docs
                        });
                    }
                }).catch(err => {
                    console.log(err)
                    reject({
                        "status": 500,
                        "message": 'Something went wrong please try again later!!'
                    });

                });




        }
    
    })
}