const productos = require('../data/productsDataBase')

module.exports = {
    index:(req,res) =>{
        const saleProducts = productos.filter((productos)=>{
            return productos.category === 'in-sale'
        });
        const visitedProducts = productos.filter((productos)=>{
            return productos.category === 'visited'
        });

        const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');


        res.render('home',{
            saleProducts,visitedProducts,toThousand
        });
    }
}