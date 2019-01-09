'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registerpageSchema = mongoose.Schema({
    policyid: String,
    policyName: String,
    policycatagory: String,
    policypercentage:String,
    rules: String,
    inputradio: String,
    status: String,
    count: Number
});
mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
    useMongoClient: true
});
module.exports = mongoose.model('admincaptivecount', registerpageSchema);