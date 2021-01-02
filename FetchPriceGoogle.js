//THIS PROGRAM ALLOWS YOU TO EXTRACT THE MXN EXCHANGE RATE FROM GOOGLE.
//DO NOT USE THIS CODE IN A PRODUCTION ENVIRONMENT.
//THIS CODE IS FOR TESTING PURPOSES ONLY. 

//THIS FUNCTION EXTRACTS THE PRICE FROM THE RETURN TEXT HTML DOCUMENT FROM FETCH.
function getPrice(str){
    let param = "data-value";
    let extract = str.slice(str.indexOf(param)+12,str.indexOf(param)+19);
    return parseFloat(extract);
}

//THIS API ENABLES CROSS-ORIGIN REQUESTS TO ANYWHERE. 
//REFER TO DETAILS AT SOURCE CODE: https://github.com/Rob--W/cors-anywhere/
let proxyurl = "https://cors-anywhere.herokuapp.com/";

//SPECIFIC URL FOR USD TO MXN EXCHANGE.
let url1 = "https://www.google.com/search?q=usd+to+mxn&oq=usd+to+mxn&aqs=chrome..69i57j69i60.7346j0j1&sourceid=chrome&ie=UTF-8"
let query = await fetch(proxyurl + url1);
let price = getPrice(await query.text());
