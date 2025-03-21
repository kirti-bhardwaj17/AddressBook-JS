const Contact = require("./ScriptJS/Contact");
const AddressBook = require("./ScriptJS/AddressBook");
const myAddressBook = new AddressBook();

const contact1 = new Contact(
  "Kirti",
  "Bhardwaj",
  "123 MG Road",
  "Delhi",
  "Delhi",
  "110001",
  "9876543210",
  "div@example.com"
);
const dupl = new Contact(
  "Shivaji",
  "Sangha",
  "789 Andheri",
  "Mumbai",
  "Maharashtra",
  "400002",
  "9876543212",
  "div@example.com"
);

const contact2 = new Contact(
  "Vivek",
  "Sharma",
  "456 Lajpat Nagar",
  "Mumbai",
  "Maharashtra",
  "400001",
  "9876543211",
  "ashutosh@example.com"
);
const duplicateContact = new Contact(
  "Shivaji",
  "Sangha",
  "789 Andheri",
  "Mumbai",
  "Maharashtra",
  "400002",
  "9876543212",
  "div@example.com"
);

myAddressBook.addContact(contact1);
myAddressBook.addContact(contact2);
myAddressBook.addContact(dupl);
myAddressBook.addContact(duplicateContact);

console.log("Before Sorting:");
myAddressBook.displayContacts();

// Sorting contacts by City, State, and Zip
console.log("\nSorted by City:");
myAddressBook.sortByCity();
myAddressBook.displayContacts();

console.log("\nSorted by State:");
myAddressBook.sortByState();
myAddressBook.displayContacts();

console.log("\nSorted by Zip:");
myAddressBook.sortByZip();
myAddressBook.displayContacts();
