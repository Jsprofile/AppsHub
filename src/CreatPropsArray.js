const CreatPropsArray = () => {
    console.log('hubFunction')

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({
        accessToken: process.env.MERGEFULL,
        portalId: process.env.PORTAL_ID
    });

    const newIds = ["American Life", "Austral", "AVLA", "AXA", "Berkley", "BMG", "Essor", "Excelsior", "Ezze", "Fator", "JNS", "Junto", "Liberty", "Mitsui", "Newe", "Porto Seguro", "Pottencial", "Sombrero", "Sompo",  "Tokio Marine"]

    newIds.forEach(id => {
        console.log(id)
        var formated = id.toLocaleLowerCase().replace(' ', '_')

        test(formated, id)
    })

    async function test(formated, id) {
        const PropertyCreate = { name: `${formated}_resultado_da_consulta`, label: `${id} | Resultado da consulta`, type: "string", fieldType: "textarea", groupName: "consulta", hasUniqueValue: false, hidden: false, formField: true };
        const objectType = "ticket";

        try {
            const apiResponse = await hubspotClient.crm.properties.coreApi.create(objectType, PropertyCreate);
            console.log(JSON.stringify(apiResponse, null, 2));
        } catch (e) {
            e.message === 'HTTP request failed'
                ? console.error(JSON.stringify(e.response, null, 2))
                : console.error(e)
        }
    }

}


module.exports = {
    CreatPropsArray
}