const PossiveisMesclados = async () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    const limit = 10;
    const after = undefined;
    const properties = [
      "name",
      "phone",
      "e_duplicado_"
    ];
    const propertiesWithHistory = undefined;
    const associations = undefined;
    const archived = false;
    
    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(limit, after, properties, propertiesWithHistory, associations, archived);
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
