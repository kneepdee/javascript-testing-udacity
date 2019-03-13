function AddressBook() {
  this.contacts = []
  this.addContact = function(contact) {
    this.contacts.push(contact)
  }
  this.getContact = function(index) {
    return this.contacts[index]
  }
  this.deleteContact = function(index) {
    this.contacts.splice(index, 1)
  }
}
