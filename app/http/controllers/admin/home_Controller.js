// const pizzas = require("../../../../menus.json")
const Menu = require('../../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('adminHome', { pizzas: pizzas })
        },

        delete(req,res){
            const id = req.params.id
            console.log("Item to be deleted",id)
            Menu.findByIdAndDelete(id,(err, res)=>{

            })
            res.redirect('/admin')
        },
        
        publish(req,res){
            const id = req.params.id
            // const menu = Menu.findById(id)
            
            Menu.findOneAndUpdate( {'_id': id}, {'publish': true} ,(err, body)=>{
                if (err){
                    console.log(err)
                }else{
                    console.log(body)
                }
            })
            res.redirect('/admin')
            

        }

    }
}

module.exports = homeController