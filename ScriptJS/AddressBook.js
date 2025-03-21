class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
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
      console.log(`${index + 1}. ${contact.toString()}`);
    });
  }

  sortContactsByName() {
    this.contacts.sort((a, b) => {
      const nameA = (a.firstName + " " + a.lastName).toLowerCase();
      const nameB = (b.firstName + " " + b.lastName).toLowerCase();
      return nameA.localeCompare(nameB);
    });
    console.log("\nContacts sorted alphabetically by name.");
  }
}

module.exports = AddressBook;
