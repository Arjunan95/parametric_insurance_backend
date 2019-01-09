'use strict';

const user = require('../models/registerInsurance');  
// const user = require('../models/fetchdata');

exports.registerUser = (name, address, phoneNumber, email, pwd, rpwd,captiveName,parent,employeeID,captiveType,entity,organization,captiveAddress) => {
    return new Promise((resolve, reject) => {

    const newUser = new user({

        name:name,
        address : address, 
        phoneNumber : phoneNumber, 
        email : email,
        pwd : pwd, 
        rpwd : rpwd,
        captiveName: captiveName,
        parent:parent,
        employeeID:employeeID,
        captiveType:captiveType,
        entity:entity,
        organization:organization,
        captiveAddress:captiveAddress
       
    });
    newUser
    .save()

    .then(() => resolve({
        status: 201,
        message: 'User Registered Sucessfully !'
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