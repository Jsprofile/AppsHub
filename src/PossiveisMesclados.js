const PossiveisMesclados = async () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    const properties = {
      "company": "Biglytics",
      "email": "bcooper@biglytics.net",
      "firstname": "Bryan 1",
      "lastname": "Cooper",
      "phone": "(877) 929-0687",
      "website": "biglytics.net"
    };
    const SimplePublicObjectInputForCreate = { properties, associations: [] };
    
    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInputForCreate);
      console.log(JSON.stringify(apiResponse, null, 2));
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }

    console.log('FOI CARALHO')

}


module.exports = {
  PossiveisMesclados
}
