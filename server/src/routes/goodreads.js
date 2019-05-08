const xmlParser = require('xml2json');
const request = require('request-promise')
const util = require('util')

//Developer Keys for Goodreads API
const key = "3g4qD0Zb9olucq9u5EyoTw"
const secret = "hrghxkAPyQwpNbzqa3lyPjfGIKg0pQHzhRzrNEg"

module.exports.search = async function(req, res){

    query = req.params.query

    var url = util.format("https://www.goodreads.com/search.xml?key=%s&q=Ender%27s+Game", key, query)

    console.log(query)
    console.log(url)

    var options = {
        method: 'GET',
        uri: url,
        json: false 
    }

    xml_string = await request(options)
    json_string = xmlParser.toJson(xml_string)
    json =  JSON.parse(json_string)

    console.log(json.GoodreadsResponse["search"]["results"]["work"])
    res.send(json.GoodreadsResponse["search"]["results"]["work"])
}