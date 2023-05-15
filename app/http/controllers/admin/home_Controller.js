// const pizzas = require("../../../../menus.json")
const Menu = require('../../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('adminHome', { pizzas: pizzas })
        }
    }
}

module.exports = homeController