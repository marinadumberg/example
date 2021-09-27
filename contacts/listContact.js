const { getContacts } = require('./getContacts')

const listContact = async () => {
  try {
    const contacts = await getContacts()
    console.table(contacts)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  listContact,
}