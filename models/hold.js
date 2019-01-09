'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const holdSchema = mongoose.Schema({
    patientData:Object,
    submitID: String,
    claimAmount: String,
     status: String,
     message: String,
     Expenses: Number,
    AmountPayerWouldPay: String,
    AmountuserHavetopay: String,
    created_at: Date
});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr',{
useMongoClient: true
});
module.exports = mongoose.model('hold', holdSchema);