function create(req, res) {

    const body = req.body;

    // SDK de Mercado Pago
    const mercadopago = require('mercadopago');
    const config = require('../config/config');

    // Agrega credenciales
    mercadopago.configure({
        access_token: config.ACCESS_TOKEN
    });

    // Crea un objeto de preferencia
    let preference = {
        items: [{
            title: 'Pago impuestos',
            unit_price: parseFloat(body.monto),
            quantity: 1
        }],
        external_reference: config.external_reference,
        notification_url: config.notification_url
    };

    mercadopago.preferences.create(preference)
        .then((resp) => {
            return res.status(200).json({
                success: true,
                init_point: resp.body.init_point,
                data: resp.body
            })
        }).catch((error) => {
            return res.status(500).json({
                success: false,
                error: error,
                message: 'Error al crear método de pago'
            })
        });

}

function webhook(req, res) {

    if (req.method === 'POST') {

        const infoReq = JSON.stringify(req.body);

        const nodemailer = require("nodemailer");

        const MAIL = {
            name: 'gmail.com',
            host: 'smtp.gmail.com',
            port: '587',
            ssl: false, // true for 465, secure:false for port 587
            user: 'sebacarlos@gmail.com',
            pass: process.env.NODE_ENV === 'dev' ? 'maomukazogaxbvcb' : 'kllnugoquszsdiwe'
        }

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: MAIL.host,
            port: MAIL.port,
            secure: false, // true for 465, false for other ports
            auth: {
                user: MAIL.user, // generated ethereal user
                pass: MAIL.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "carlos8_alb@hotmail.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: infoReq // plain text body
        });

    }

    return res.status(200).json({
        success: true,
        message: 'Works'
    })

}

module.exports = {
    create,
    webhook
};