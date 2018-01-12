const mongoose = require('mongoose');

const cupcakeSchema = new mongoose.Schema({
    flavor: String,
    frosting: String,
    delicious: Boolean,
    size: String,
    color: String
});

// initilizing/creating blueprint
const Cupcake = mongoose.model('Cupcake', cupcakeSchema);

module.exports = Cupcake;