import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component  {
  // console.log('ContactForm value', value)

  state = {
    name: '',
    number: ''
  };

  handleChange = (evt) => {
  this.setState({[evt.target.name]: evt.target.value})
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault()
    const { handleAddContact } = this.props;
    const { name, number } = this.state;
    const newContact = { id: nanoid(4), name: name, number: number };
  
    handleAddContact(newContact);
    this.clearForm()
  }

  clearForm = () => this.setState({ name: '', number: '' });

  render() {
    // const { handleSubmit } = this.props;
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Telephone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button>add contact</button>
        </form>
      </>
    );
  }
    
};

export default ContactForm;