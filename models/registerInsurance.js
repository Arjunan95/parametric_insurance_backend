'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const holdSchema = mongoose.Schema({
    
    name:String,
        address : String, 
        phoneNumber : Number, 
        email :  {
            type: String,
            unique: true
        },
        pwd : String, 
        rpwd : String,
        captiveName: String,
        parent:String,
        employeeID:String,
        captiveType:String,
        entity:String,
        organization:String,
        captiveAddress:String,
        // pass:String
     
});
mongoose.Promise = global.Promise;
//mongodb://CaptiveInsurance:Captive@123@ds223343.mlab.com:23343/captiveinsurance
// mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });
    mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
        useMongoClient: true
    // useMongoClient: true
});
module.exports = mongoose.model('reguser', holdSchema);