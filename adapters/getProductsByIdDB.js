const getProductByIdDB = async (ProductId) => {
    const products = []
    for(let i = 1; i < 11; i += 1)
        products.push({id : i, name : "product" + i, value : i * 100})
    const product = products.find(p => p.id == ProductId)
    if(product != undefined) return product
    return {error : 404, message : "No product with ID " + ProductId}
}
module.exports = getProductByIdDB
