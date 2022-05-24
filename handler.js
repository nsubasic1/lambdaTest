'use strict';
const ProductsAdapter = require("./adapters/ProductsAdapter")
var validateCurrencyCode = require('validate-currency-code');

module.exports.handler = async(event) => {
  console.log(event)

  const currency = event?.queryStringParameters?.currency
  if(currency != null){
    if (!validateCurrencyCode(currency)) {
      return {'statusCode' : 400, body: JSON.stringify({message: "Invalid currency"})};
    }
  }
  try{
  const routeKey = event.routeKey
  
  if(routeKey.includes("dynamoDB"))
    return await ProductsAdapter(event)

  else if (routeKey.includes(sellableProduct))
    return {statusCode : 200, body:JSON.stringify({message:  "not implemented yet"})};

  else 
  return {statusCode : 404, body:JSON.stringify({message:  "Unsupported path"})};
  
  } catch (error) {
    if(error.message ==  "No such product in the database") 
    return {'statusCode' : 404, body: JSON.stringify({message: error.message})};
    throw error
  }

};
