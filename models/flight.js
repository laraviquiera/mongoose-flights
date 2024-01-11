const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
    required: true }
});

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
  },
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN', 
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    required: true,
    default: () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    },
  },
  destinations: [destinationSchema],
});



module.exports = mongoose.model('Flight', flightSchema);