'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TpaSchema = mongoose.Schema({
   patientData:Object,
    submitID: String,
    claimAmount: String,
    status: String,
    message: String,
    Expenses: Number,
    AmountPayerWouldPay: Number,
    AmountuserHavetopay: Number,
    created_at: Date

});
//const {TpaSchema} = require('../models/Tpa');
// router.post('/Tpa', async(req, res) => {
//     let make = await TpaSchema.find()
//     .sort({NAME:-1})
//      // .populate("-_id")
//      .select("-submitID");
//      console.log(make);
//      res.send(make);
//  });
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
    useMongoClient: true
});

mongodb://manojkrishna:Manoj@485@ds141932.mlab.com:41932/phr
module.exports = mongoose.model('Tpa', TpaSchema);