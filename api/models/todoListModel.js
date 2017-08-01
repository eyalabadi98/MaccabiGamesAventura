'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//URL https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
//connecting: https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171
var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  list_of_emails: {
    type: Array,
    default: null
  },
  email: {
    type: String,
    default: 'Enter an Email'
  },
  team: {
    type: String,
    default: 'Enter a Team'
  },
  phone_numbers: {
    type: String,
    default: 'Enter +1 phone numbers'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
