// import logo from './logo.svg';
import React, { Component } from 'react';
// import { nanoid }  from 'nanoid';
import './App.css';
// import Counter from './components/Counter/Counter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  handleAddContact = (newContact) => {
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
  }

  handleFilter = (evt) => {
    this.setState({filter: evt.target.value})
  }

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return filter ? contacts.filter(contact => contact.name.includes(filter)) : contacts;
  }

  handleDelete = (id) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }
  

  render() {
    // const { contacts } = this.state;
    const filteredContacts = this.filteredContacts();
    // console.log("contacts", contacts);
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter}/> 
        <ContactList contacts={filteredContacts} handleDelete={this.handleDelete} />
      </div>
    );
  }









  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>

  //   // <div>
  //   //   {/* <Counter step={3} /> */}
  //   // </div>
  // );
}

export default App;
