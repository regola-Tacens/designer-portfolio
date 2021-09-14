const express = require('express')
const router = express.Router()
const nodemailer = require ('nodemailer')
const cors = require ('cors')
const creds = require ('./config')

const transport = {
    service : 'gmail',
    host : 'smtp.gmail.com',
    secure :false,
    port : 587,
    auth : {
        user : creds.USER,
        pass : creds.PASS
    },
    tls: {
        rejectUnauthorized : false
    },
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success)=>{
    if (error){
        console.log(error)
    } else {
        console.log('server is ready to take messages')
    }
})

router.post('/send', (req, res, next)=>{
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name : ${name} \n email : ${email} \n message : ${message}`

    const mail = {
        from : name,
        to : 'politi.julien64@gmail.com',
        text : content
    }

    transporter.sendMail(mail, (err, data) =>{
        if(err){
            res.json({status : 'fail'})
        } else {
            res.json ({satus : 'success'})

            transporter.sendMail({
                from : "politi.julien64@gmail.com",
                to : email,
                subject : " merci de m'avoir contacté !",
                text : `merci de m\'avoir contacté \n\n Form details\nNom: ${name} \nEmail : ${email}\nMessage : ${message}`
            },function (error, info){
                if(error) {
                    console.log(error)
                } else {
                    console.log('message sent : ' + info.response)
                }
            });
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)