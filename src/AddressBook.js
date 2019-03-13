function AddressBook() {
  this.contacts = []
  this.initialComplete = false
  this.getInitialContacts = function(cb) {
    var self = this
    selfTimeout(function() {
      self.initialComplete = true
      if (cb) {
        return cb()
      }
    }, 3)
  }
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
