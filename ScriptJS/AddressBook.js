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

  searchByCity(city) {
    const results = this.contacts.filter(
      (contact) => contact.city.toLowerCase() === city.toLowerCase()
    );
    if (results.length === 0) {
      console.log(`No contacts found in city: ${city}`);
    } else {
      console.log(`\nContacts in ${city}:`);
      results.forEach((contact) =>
        console.log(
          `${contact.firstName} ${contact.lastName}, Phone: ${contact.phone}, Email: ${contact.email}`
        )
      );
    }
  }

  searchByState(state) {
    const results = this.contacts.filter(
      (contact) => contact.state.toLowerCase() === state.toLowerCase()
    );
    if (results.length === 0) {
      console.log(`No contacts found in state: ${state}`);
    } else {
      console.log(`\nContacts in ${state}:`);
      results.forEach((contact) =>
        console.log(
          `${contact.firstName} ${contact.lastName}, Phone: ${contact.phone}, Email: ${contact.email}`
        )
      );
    }
  }
}

module.exports = AddressBook;
