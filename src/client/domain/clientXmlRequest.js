const createClientXml= (document,name,lastname,email,phone)=>{
    return(`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:helloservice">
                <soapenv:Header/>
                <soapenv:Body>
                    <urn:registerClient soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <document xsi:type="xsd:string">${document}</document>
                        <name xsi:type="xsd:string">${name}</name> 
                        <lastname xsi:type="xsd:string">${lastname}</lastname>
                        <email xsi:type="xsd:string">${email}</email>
                        <phone xsi:type="xsd:string">${phone}</phone>
                    </urn:registerClient>
                </soapenv:Body>
            </soapenv:Envelope>`);
};

const rechargeWalletXml=(document,phone,amount)=>{
    return(`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:helloservice">
                <soapenv:Header/>
                <soapenv:Body>
                    <urn:payWallet soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <document xsi:type="xsd:string">${document}</document>
                        <phone xsi:type="xsd:string">${phone}</phone>
                        <amount xsi:type="xsd:number">${amount}</amount>
                    </urn:payWallet>
                </soapenv:Body>
            </soapenv:Envelope>`);
};

const getBalanceXml=(document,phone)=>{
    return(`<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:helloservice">
                <soapenv:Header/>
                <soapenv:Body>
                    <urn:getBalance soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <document xsi:type="xsd:string">${document}</document>
                        <phone xsi:type="xsd:string">${phone}</phone>
                    </urn:getBalance>
                </soapenv:Body>
                </soapenv:Envelope>`
            );
};

module.exports={
    createClientXml,
    rechargeWalletXml,
    getBalanceXml
}