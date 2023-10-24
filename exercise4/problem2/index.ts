class Name {
    firstName:string;
    lastName:string;
  constructor(firstName:string, lastName:string) {
    this.firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    this.lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  get initials() {
    return this.firstName[0] + '.' + this.lastName[0];
  }
}

export default Name;
