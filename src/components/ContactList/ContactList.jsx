function ContactList({contacts, handleDeleteContact}) {
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
            <button tupe="button" onClick={() => handleDeleteContact(id)}>
              Remove contact
            </button>
          </li>
        ))}
      </ul>
    );
};

export default ContactList;