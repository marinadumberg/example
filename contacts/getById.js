const { getContacts } = require('./getContacts')

const getById = async (id) => {
  try {
    const contacts = await getContacts()
    const contact = contacts.find((cont) => String(cont.id) === String(id))

    if (!contact) {
      console.log(` Contact with id:${id} did't find`)
      return
    }

    console.table(contact)
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = {
  getById,
}