const User =  require('../models/user')

exports.check = async (req,res,next)=>{
const user = await User.findById(req.userId)
 user.isAdmin ? next() : res.satatus(403).json({message:'Forbidden'})
}