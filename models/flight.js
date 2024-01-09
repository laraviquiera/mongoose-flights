const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: { type: String, enum: ['Alaska', 'Delta', 'American', 'United'], required: true },
    airport: { type: String, default: 'SEA', enum: ['SEA', 'DFW', 'DEN', 'LAX', 'JFK', 'SFO'], required: true },
    flightNo: { type: Number, min: 10, max: 9999, required: true },
    departs: {
      type: String, default: function () {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      }
    },
  }, {
    timestamps: true
  });
  
  

module.exports = mongoose.model('Flight', flightSchema);