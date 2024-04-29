const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/mail', async(req,res) => {
    const {email} = req.body
    const newMember = new schemas.Member({
        email: email
    })
    const saveMember = await newMember.save()
    if(saveMember) {
        res.send('You have been added to the mailing list.')
    } else {
        res.send('An error has occurred.')
    }
    res.end()
})


router.post('/contact', async(req, res) => {
    const {first, last, email, message} = req.body
    const newContact = new schemas.Contact({
        first: first,
        last: last,
        email: email,
        message: message
    })
    const saveContact = await newContact.save()
    if(saveContact) {
        res.send('Message sent. Thank you!')
    } else {
        res.send('Failed to send.')
    }
    res.end()
    
})

module.exports = router