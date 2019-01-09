'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createpolicySchema = mongoose.Schema({
   
    policyId: String,
            policyName: String,
            policycatagory: String,
            rules: String,
                     policypercentage: String,
            inputradio: String,
});
mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
    useMongoClient: true
});
module.exports = mongoose.model('createpolicy', createpolicySchema);