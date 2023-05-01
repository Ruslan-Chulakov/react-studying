import React from "react";
// import { nanoid } from "nanoid";

function ContactList({ contacts, handleDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>
          <br />
          <span>{number}</span>
          <button type="button" onClick={() => handleDelete(id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
