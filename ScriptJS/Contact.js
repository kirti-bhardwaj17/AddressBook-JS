class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  display() {
    return `${this.firstName} ${this.lastName} | Phone: ${this.phone} | Email: ${this.email}`;
  }
}

const contact1 = new Contact("John", "Doe", "1234567890", "john@example.com");
console.log(contact1.display());
