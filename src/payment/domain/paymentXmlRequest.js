const makePaymentXml=(document,amount)=>{
    return(`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:helloservice">
                <soapenv:Header/>
                <soapenv:Body>
                    <urn:makePayment soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <document xsi:type="xsd:string">${document}</document>
                        <amount xsi:type="xsd:number">${amount}</amount>
                    </urn:makePayment>
                </soapenv:Body>
            </soapenv:Envelope>`);
};

const authPaymentXml= (document,token)=>{
    return(`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:helloservice">
                <soapenv:Header/>
                <soapenv:Body>
                    <urn:authPayment soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <document xsi:type="xsd:string">${document}</document>
                        <token xsi:type="xsd:string">${token}</token>
                    </urn:authPayment>
                </soapenv:Body>
            </soapenv:Envelope>`);
};

module.exports = {
    makePaymentXml,
    authPaymentXml
}