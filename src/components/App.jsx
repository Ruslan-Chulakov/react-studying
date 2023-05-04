import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import {loadDataToLocalStorage, getDataFromLocalStorage} from './Utils/LocalStorageApp';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = newContact => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }))
    
  };

  handleFilterInput = (evt) => {
    this.setState({ filter: evt.target.value })
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      return contacts.filter(({ name }) => name.includes(filter));
    }
    return contacts;     
  }

  handleDeleteContact = async (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  }

  /////////////////////////////////////////////////////
  componentDidMount() {
    const storedContacts = getDataFromLocalStorage('contacts')
    storedContacts && this.setState({ contacts:  storedContacts })
  }

  componentDidUpdate() {
    loadDataToLocalStorage('contacts', this.state.contacts);
  }
  ////////////////////////////////////////////////////

  render() {  
    const { filter } = this.state
    const filteredContacts = this.filteredContacts()

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} handleFilterInput={this.handleFilterInput} />
        <ContactList contacts={filteredContacts} handleDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}
