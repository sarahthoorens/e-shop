const { Schema, model } = require('mongoose');

const productSchema = new Schema( {
   productName: {
      type: String,
   }, 
   productDescription: {
      type: String,
   },
   productPrice: {
      type: Number,
   },
   productImage: {
      type: String,
   },
   productCategory: {
      type: String,
   },
   productQuantity: {
      type: Number,
   },
   productBrand: {
      type: String,
   },
})