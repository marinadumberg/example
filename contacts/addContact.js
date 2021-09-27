const { getContacts, updateContacts } = require('./getContacts');
const { v4 } = require('uuid');

const addContact = async (name, email, phone) => {
  try {
    const contacts = await getContacts()
    const id = v4()
    const newContact = { id, name, email, phone }
    console.log(`in Process`)
    contacts.push(newContact)
    await updateContacts(contacts)
    console.table(contacts)
    console.log(`${newContact.name}`)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  addContact,
}