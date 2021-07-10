import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  if ( req.headers.authorization &&req.headers.authorization.startsWith('Bearer')) 
    {
    try {
      token = req.headers.authorization.split(' ')[1]// split by " " so the token is the index 1('bearer' is index 0)
        
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }