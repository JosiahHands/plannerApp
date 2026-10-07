import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {

  return (
    <>
      <select
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select a contact</option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact}>
            {contact}
          </option>
        ))}
      </select>
    </>
  );
};
