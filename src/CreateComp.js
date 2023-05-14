const CreateComp = () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    async function test(){
        const properties = {
          "city": "Cambridge",
          "domain": "biglytics.net",
          "industry": "Technology",
          "name": "Hook Teste Int",
          "phone": "(877) 929-0687",
          "state": "Massachusetts",
          "cnpj": "99220805000180"
        };
        const SimplePublicObjectInputForCreate = { properties, associations: [{"to":{"id":"101"},"types":[{"associationCategory":"HUBSPOT_DEFINED","associationTypeId":2}]}] };
        
        try {
          const apiResponse = await hubspotClient.crm.companies.basicApi.create(SimplePublicObjectInputForCreate);
          console.log(JSON.stringify(apiResponse, null, 2));
        } catch (e) {
          e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
        }
}

test()

}

module.exports = {
    CreateComp
}