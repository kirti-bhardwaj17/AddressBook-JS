class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = this.validateName(firstName, "First Name");
    this.lastName = this.validateName(lastName, "Last Name");
    this.address = this.validateAddress(address, "Address");
    this.city = this.validateAddress(city, "City");
    this.state = this.validateAddress(state, "State");
    this.zip = this.validateZip(zip);
    this.phone = this.validatePhone(phone);
    this.email = this.validateEmail(email);
  }

  validateName(name, fieldName) {
    let namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!namePattern.test(name)) {
      throw new Error(
        `${fieldName} must start with a capital letter and have at least 3 characters.`
      );
    }
    return name;
  }

  validateAddress(value, fieldName) {
    if (value.length < 4) {
      throw new Error(`${fieldName} must have at least 4 characters.`);
    }
    return value;
  }

  validateZip(zip) {
    let zipPattern = /^\d{6}$/;
    if (!zipPattern.test(zip)) {
      throw new Error("Zip code must be a 6-digit number.");
    }
    return zip;
  }

  validatePhone(phone) {
    let phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      throw new Error("Phone number must be 10 digits and start with 6-9.");
    }
    return phone;
  }

  validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      throw new Error("Invalid email format.");
    }
    return email;
  }

  display() {
    return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
  }
}

module.exports = Contact;
