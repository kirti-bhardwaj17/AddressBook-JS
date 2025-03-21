class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
    console.log(" Contact added successfully!");
  }

  displayContacts() {
    console.log("\n📘 Address Book Contacts:");
    if (this.contacts.length === 0) {
      console.log(" No contacts found!");
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

  editContact(firstName, updatedDetails) {
    const contact = this.contacts.find((c) => c.firstName === firstName);
    if (contact) {
      Object.assign(contact, updatedDetails);
      console.log(` Contact '${firstName}' updated successfully!`);
    } else {
      console.log(` Contact '${firstName}' not found!`);
    }
  }

  deleteContact(firstName) {
    const index = this.contacts.findIndex((c) => c.firstName === firstName);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(` Contact '${firstName}' deleted successfully!`);
    } else {
      console.log(` Contact '${firstName}' not found!`);
    }
  }
}

module.exports = AddressBook;
