
const getProductByIdDriven = require("../ports/GetProductByIdDriven")
const addProductDriven = require("../ports/AddProductDriven")
const getProductsDriven = require("../ports/GetProductsDriven");
const deleteProductDriven = require("../ports/DeleteProductDriven");
const ProductsAdapter = async(event) => {
    try{
        const routeKey = event.routeKey
        let response = {}
        let code = 200;
        switch(routeKey){
            case 'GET /dynamoDB' : {
                    response = await getProductsDriven();
                break
            }
            case 'GET /dynamoDB/{id}' : {
                let currency = event?.queryStringParameters?.currency
                console.log("trenutna valuta " + currency)
                response = await getProductByIdDriven(event.pathParameters.id, currency)
                break
            }
            case 'DELETE /dynamoDB/{id}' : {
                response = await deleteProductDriven(event.pathParameters.id)
                break
            }
            case 'POST /dynamoDB' : {
                console.log("post")
                response = await addProductDriven(event.body)
                code = 201
                break
            }
            default : {
                throw {message : "nije ok"}
            }
        }
        let res = {
            'statusCode': code,
            'body': JSON.stringify({data : response})
        }
        return res
    }catch(error){
        throw error
    }
}

module.exports = ProductsAdapter

