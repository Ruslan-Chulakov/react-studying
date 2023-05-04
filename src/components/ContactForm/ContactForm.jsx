import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (evt) => {
    evt.preventDefault();

    const { handleSubmit } = this.props;
    const id = nanoid(4);
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const newContact = { id, name, number };

    handleSubmit(newContact);
    this.clearFormFields();
  }

  clearFormFields = () => {
    this.setState({name: '', number: ''})
  }
   

  render() {
      const { name, number } = this.state;
      

    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hendleChange}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hendleChange}
            value={number}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
