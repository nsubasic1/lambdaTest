const getProductByIdDB = require("../adapters/getProductsByIdDB");
const ProductsDB = require("../adapters//ProductsDB");
const  GetConversions = require("../adapters/Conversions");

const getProductByIdDriver = async (ProductId) => {
    try{
            const res = await ProductsDB.GetProductById(ProductId)
            return res;
    }catch(err){
        throw err
    }
}

const addProductDriver = async (body) => {
        const res = await ProductsDB.AddproductDB(body)
        return res;
}

const getProductsDriver = async() =>{
        const res = await ProductsDB.GetproductsDB()
        return res;
}

const deleteProductDriver = async (ProductId) => {
    const res = await ProductsDB.DeleteProductDB(ProductId)
    return res;
}

const getConversions = async(currency) => {
    const res = await GetConversions(currency)
    return res;
}

module.exports = {
    getProductByIdDriver,
    addProductDriver,
    getProductsDriver,
    deleteProductDriver,
    getConversions
}
