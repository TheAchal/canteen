const multer = require('multer')
const path = require('path')
const Storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        console.log(file)
      cb(null, './')
    },
    filename: (req, file, cb)=>{
    //   fname = req.user._id
    //   let ext = path.extname(file.originalname)
    console.log("Inside storage")
      cb(null, file.originalname)
    }
  })
  const itempic = multer({
    storage: Storage,
    // fileFilter: (req, file, cb)=>{
    //     console.log('hi', file)
    //   if(file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" ){
    //     cb(null, true)
    //   }else{
    //     console.log("File type not allowed")
    //     cb(null, false)
    //   }
    // }
  })
  module.exports = {itempic}