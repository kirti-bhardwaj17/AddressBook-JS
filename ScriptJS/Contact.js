const Contact = require("./ScriptJS/Contact");
const AddressBook = require("./ScriptJS/AddressBook");

const myAddressBook = new AddressBook();

const contact1 = new Contact(
  "Divyansh",
  "Shukla",
  "123 MG Road",
  "Delhi",
  "Delhi",
  "110001",
  "9876543210",
  "Divyansh@example.com"
);
const contact2 = new Contact(
  "Vivek",
  "Mishra",
  "456 Lajpat Nagar",
  "Mumbai",
  "Maharashtra",
  "400001",
  "9876543211",
  "ashutosh@example.com"
);

myAddressBook.addContact(contact1);
myAddressBook.addContact(contact2);

myAddressBook.displayContacts();

// Count Contacts using reduce()
myAddressBook.countContacts();
