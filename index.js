const Contact = require("./script.js/contact");
const AddressBook = require("./script.js/addressBook");

const myAddressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "John",
    "Doe",
    "123 Main St",
    "New York",
    "New York",
    "100001",
    "9876543210",
    "john@example.com"
  );
  myAddressBook.addContact(contact1);

  const contact2 = new Contact(
    "Alice",
    "Brown",
    "456 Park Ave",
    "Los Angeles",
    "California",
    "900001",
    "9876543211",
    "alice@example.com"
  );
  myAddressBook.addContact(contact2);
} catch (error) {
  console.error("❌ Error:", error.message);
}

myAddressBook.displayContacts();
