class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    // Check for duplicate based on first and last name
    const isDuplicate = this.contacts.some(
      (c) =>
        c.firstName === contact.firstName && c.lastName === contact.lastName
    );

    if (isDuplicate) {
      console.log(
        `Contact with name ${contact.firstName} ${contact.lastName} already exists. Contact not added.`
      );
      return;
    }

    this.contacts.push(contact);
    console.log(
      `Contact ${contact.firstName} ${contact.lastName} added successfully.`
    );
  }

  displayContacts() {
    console.log("\nAddress Book Contacts:");
    if (this.contacts.length === 0) {
      console.log("No contacts found.");
      return;
    }
    this.contacts.forEach((contact, index) => {
      console.log(
        `${index + 1}. ${contact.firstName} ${contact.lastName}, ${
          contact.address
        }, ${contact.city}, ${contact.state} - ${contact.zip}, Phone: ${
          contact.phone
        }, Email: ${contact.email}`
      );
    });
  }

  countContacts() {
    const total = this.contacts.reduce((count) => count + 1, 0);
    console.log(`\nTotal Contacts: ${total}`);
    return total;
  }
}

module.exports = AddressBook;
