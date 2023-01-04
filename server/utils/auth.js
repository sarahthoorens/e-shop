const jwt = require('jsonwebtoken');

const secret = 'mysecretss';
const expiration = '2h';

module.exports = {
   authMiddleware: function ({ req, res, next }) {
      let token = req.query.token || req.headers.authorization;
      if (req.headers.authorization) {
         token = token.split(' ').pop().trim();
      }
      if (!token) {
         return res.status(400).json({ message: 'You have no token!' });
      };

   //verify token and get user data out of it
   try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
   } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'Invalid token!' });
   }

   // send to next endpoint
   next();
},
signToken: function ({ email, username, _id }) {
   const payload = { email, username, _id };
   return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
   },
};