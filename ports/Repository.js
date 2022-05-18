const getProductByIdDB = require("../adapters/getProductsByIdDB")

const getProductByIdDriver = async (ProductId) => {
    try{
            const res = await getProductByIdDB(ProductId)
            return res;
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getProductByIdDriver
}
