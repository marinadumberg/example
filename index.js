// const contactsOperations = require('./contacts/contacts.js')
const {listContact,
    getById,
    removeContact,
    addContact} = require('./contacts/contacts');
const argv = require('yargs').argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          listContact();
      break;

    case 'get':
      getById(id)
      break;

    case 'add':
      addContact(name,email,phone)
      break;

    case 'remove':
          removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);