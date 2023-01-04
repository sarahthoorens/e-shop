const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         trim: true
      },
      email: {
         type: String,
         required: true,
         unique: true,
         match: [/.+@.+\..+/, 'Must use a valid email address']
      },
      password: {
         type: String,
         required: true,
         minlength: 8,
      },
      product: [
         { type: Schema.Types.ObjectId, ref: 'Product' }
      ],
      order: [
         { type: Schema.Types.ObjectId, ref: 'Order' }
      ]
   },
   {
      toJSON: {
         virtuals: true
      }
   }
);
module.exports = model('User', userSchema);