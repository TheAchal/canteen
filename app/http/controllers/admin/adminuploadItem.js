const Menu = require('../../../models/menu')
function adminuploadItem() {
    
    return {

        upload(req, res, next){
            const { item, price, image} = req.body
            console.log(item, price, image)
            const menu = new Menu({
                name: item,
                price,
                image
            })
   
            menu.save().then((menu) => {
               // Login
               return res.redirect('/admin/')
            }).catch(err => {
               req.flash('error', 'Something went wrong')
                   return res.redirect('/admin/')
            })
           }
            //return res.redirect('/admin/')

        }
        
}

module.exports = adminuploadItem