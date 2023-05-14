const AjusteDeNegocios = async () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    // const limit = 10;
    // const after = undefined;
    // const properties = [
    //   "dealname"
    // ];
    // const propertiesWithHistory = [
    //   "dealname"
    // ];
    // const associations = undefined;
    // const archived = false;
    
    // try {
    //   const apiResponse = await hubspotClient.crm.deals.basicApi.getPage(limit, after, properties, propertiesWithHistory, associations, archived);
    //   console.log(JSON.stringify(apiResponse, null, 2));
    // } catch (e) {
    //   e.message === 'HTTP request failed'
    //     ? console.error(JSON.stringify(e.response, null, 2))
    //     : console.error(e)
    // }
    // console.log('FOI CARALHO')

    const PublicObjectSearchRequest =
    {
        filterGroups: [{
            "filters": [
                { "value": "Negócio teste1_2", "propertyName": "dealname", "operator": "EQ" }
            ]
        }]
    };

    try {
      //Requisição das empresas com base no fitro CompanyNameRequest
      const apiResponse = await hubspotClient.crm.deals.searchApi.doSearch(PublicObjectSearchRequest);

      console.log(apiResponse)

      const dealId = apiResponse.results.SimplePublicObject.id
      console.log(dealId)
      







  } catch (err) {
      console.error(err);
      throw err;
  }

}

async function getCompanyData(companyID, properties) {
  try {
      const companyApiResponse = await hubspotClient.crm.companies.basicApi.getById(companyID, properties);
      return companyApiResponse;
  } catch (err) {
      console.error(`Erro ao buscar dados do contato ${companyID}: ${err.message}`);
      return null;
  }
}



module.exports = {
  AjusteDeNegocios
}
