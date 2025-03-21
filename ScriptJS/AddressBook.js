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
      console.log(
        `${index + 1}. ${contact.firstName} ${contact.lastName}, ${
          contact.address
        }, ${contact.city}, ${contact.state} - ${contact.zip}, Phone: ${
          contact.phone
        }, Email: ${contact.email}`
      );
    });
  }

  countPersonsByCity(city) {
    const count = this.contacts.filter(
      (contact) => contact.city.toLowerCase() === city.toLowerCase()
    ).length;
    console.log(`\nNumber of persons in ${city}: ${count}`);
  }

  countPersonsByState(state) {
    const count = this.contacts.filter(
      (contact) => contact.state.toLowerCase() === state.toLowerCase()
    ).length;
    console.log(`\nNumber of persons in ${state}: ${count}`);
  }
}

module.exports = AddressBook;
