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

  viewPersonsByCity(city) {
    const persons = this.contacts
      .filter((contact) => contact.city.toLowerCase() === city.toLowerCase())
      .map((contact) => `${contact.firstName} ${contact.lastName}`);

    if (persons.length === 0) {
      console.log(`No persons found in city: ${city}`);
    } else {
      console.log(`\nPersons in ${city}:`);
      persons.forEach((person) => console.log(person));
    }
  }

  viewPersonsByState(state) {
    const persons = this.contacts
      .filter((contact) => contact.state.toLowerCase() === state.toLowerCase())
      .map((contact) => `${contact.firstName} ${contact.lastName}`);

    if (persons.length === 0) {
      console.log(`No persons found in state: ${state}`);
    } else {
      console.log(`\nPersons in ${state}:`);
      persons.forEach((person) => console.log(person));
    }
  }
}

module.exports = AddressBook;
