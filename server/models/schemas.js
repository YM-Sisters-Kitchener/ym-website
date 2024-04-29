const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    email:{type:String, required:true},
    entryDate:{type:Date, default:Date.now}
})
const contactSchema = new Schema({
    first: {type:String, required:true},
    last: {type:String, required:true},
    email:{type:String, required:true},
    message:{type:String, required: true},
    entryDate:{type:Date, default:Date.now}
})
const Member = mongoose.model('Member', memberSchema, 'mailing_list')
const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
const mySchemas = {'Contact':Contact, 'Member':Member}
module.exports = mySchemas