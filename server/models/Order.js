const { Schema } = require('mongoose');

const orderSchema = new Schema({ 
   orderNumber: {
      type: Number,
      required: true,

   },
   orderDate: {
      type: Date,
      default: Date.now
   },
   orderStatus: {
      type: String,
      required: true,
   },
   orderTotal: {
      type: Number,
      required: true,
   },
   orderItems: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Product'
      }
   ],
   orderUser: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
});

module.exports = orderSchema;
