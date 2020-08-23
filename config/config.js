// Env
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Mercado Pago settings
module.exports = {
    ACCESS_TOKEN: 'TEST-6584423474242549-110122-582c2a54102e9a055739833575d8e393-95801107',
    external_reference: 'Shop name',
    payer: {
        // información del comprador, si estan en producción tienen que traerlos del request
        //(al igual que hicimos con el precio del item) 
        name: "Lalo",
        surname: "Landa",
        email: "test_user_63274575@testuser.com",
        // si estan en sandbox, aca tienen que poner el email de SU usuario de prueba si estan 
        //en producción, deberian completar esta información 
        //de la misma manera que lo hicimos con items, units, y price

        phone: {
            area_code: "11",
            number: "22223333"
        },
        address: {
            zip_code: "1111",
            street_name: "False",
            street_number: "123"
        }
    },
    notification_url: "https://mercado-pago-integration-nodej.herokuapp.com/checkout/webhook"
}