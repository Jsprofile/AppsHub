const ExcluiEmpresas = () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    const newIds = []

    function execDelay(id){
        console.log(id)
        test(id)
      }
      
      let index = 0
      const intervalId = setInterval(() => {
        if (index >= newIds.length) {
          clearInterval(intervalId)
          return
        }
        execDelay(newIds[index])
        index++
      }, 1000)

    async function test(id) {
        const companyId = id;

        try {
          const apiResponse = await hubspotClient.crm.companies.basicApi.archive(companyId);
          console.log(JSON.stringify(apiResponse, null, 2));
        } catch (e) {
          e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
        }
    }

}


module.exports = {
    ExcluiEmpresas
}
