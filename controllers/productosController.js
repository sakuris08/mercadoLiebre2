const productos = require('../data/productsDataBase')


module.exports={
    detalles:(req,res) =>{
        let producto = productos.find(producto =>{
            return producto.id == req.params.id
        })
        res.render('detalles',{
            productos,producto
        })
    }
}