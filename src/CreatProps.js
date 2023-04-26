const CreatProps = () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    async function test(){
        const PropertyCreate = { name: "prop_test_afternoon03", label: "Teste propriedade de tarde 03", type: "enumeration", fieldType: "select", groupName: "contactinformation", options: [{"label":"Option A","description":"Choice number one","value":"A","displayOrder":1,"hidden":false},{"label":"Option B","description":"Choice number two","value":"B","displayOrder":2,"hidden":false}], displayOrder: 2, hasUniqueValue: false, hidden: false, formField: true };
        const objectType = "contact";

        https://api.hubapi.com/properties/v1/objects/timeline?portalId=YOUR_PORTAL_ID&appId=YOUR_APP_ID&objectType=OBJECT_TYPE

        
        try {
          const apiResponse = await hubspotClient.crm.properties.coreApi.create(objectType, PropertyCreate);
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
    CreatProps
}