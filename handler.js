'use strict';
const ProductsAdapter = require("./adapters/ProductsAdapter")

module.exports.handler = async(event) => {
  console.log(event)
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
