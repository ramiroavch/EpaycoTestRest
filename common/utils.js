const parserXml = require('xml-js');
const options={compact: true, ignoreComment: true, spaces: 4};
const jsonParser=(data,method)=>{
    return parser = parserXml.xml2js(data, options)['soap:Envelope']['soap:Body'][method];
}

module.exports = jsonParser;