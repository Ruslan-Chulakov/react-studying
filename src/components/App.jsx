import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import {loadDataToLocalStorage, getDataFromLocalStorage} from './Utils/LocalStorageApp';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


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
      <BrowserRouter>
        <div>
          <h1>Browser router</h1>
          <nav>
            <NavLink to="/contactForm">contactForm</NavLink>
            <NavLink to="/filter">Filter</NavLink>
            <NavLink to='/contactList'>Contact list</NavLink>
          </nav>
          <Routes>
            <Route
              path="/contactForm"
              element={<ContactForm handleSubmit={this.handleSubmit} />}
            />
            <Route
              path="/filter"
              element={
                <Filter
                  value={filter}
                  handleFilterInput={this.handleFilterInput}
                />
              }
            />
            <Route
              path="/contactList"
              element={
                <ContactList
                  contacts={filteredContacts}
                  handleDeleteContact={this.handleDeleteContact}
                />
              }
            />
            {/* <Route path='/contactList/:contactName' element="kasdkhkasjf"/> */}
          </Routes>
          {/* <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} handleFilterInput={this.handleFilterInput} />
        <ContactList contacts={filteredContacts} handleDeleteContact={this.handleDeleteContact} /> */}
        </div>
      </BrowserRouter>
    );
  }
}
