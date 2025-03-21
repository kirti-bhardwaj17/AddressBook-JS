class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  displayContacts() {
    this.contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.toString()}`);
    });
  }

  sortByCity() {
    this.contacts.sort((a, b) => a.city.localeCompare(b.city));
  }

  sortByState() {
    this.contacts.sort((a, b) => a.state.localeCompare(b.state));
  }

  sortByZip() {
    this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
  }
}

module.exports = AddressBook;
