const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    productName: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require,
    },
    condition: {
      type: Boolean,
      require: true,
      default: true,
    },
    bodyType: {
      type: String,
    },
    bodyMaterial: {
      type: String,
    },
    bodyTop: {
      type: String,
    },
    veneer: {
      type: String,
    },
    color: {
      type: String,
    },
    neckMaterial: {
      type: String,
    },
    neckShape: {
      type: String,
    },
    neckConstruction: {
      type: String,
    },
    radius: {
      type: Number,
    },
    fingerBoardMaterial: {
      type: String,
    },
    fingerBoardInlay: {
      type: String,
    },
    numberOfFrets: {
      type: Number,
    },
    scaleLength: {
      type: Number,
    },
    nutWidth: {
      type: Number,
    },
    bridge: {
      type: String,
    },
    tuners: {
      type: String,
    },
    neckPickup: {
      type: String,
    },
    bridgePickUp: {
      type: String,
    },
    switching: {
      type: String,
    },
    controller: {
      type: String,
    },
    notes: {
      type: String,
    },
    images: [{
        type: String
    }],
    price: {
        type: Number
    },
    quantity: {
        type: Number
    }
  })
);
module.exports = Product;
