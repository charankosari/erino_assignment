import React, { useState, useEffect } from "react";
import {
  fetchContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../api/contactApi";
import ContactForm from "../components/ContactForm";
import ContactsTable from "../components/ContactsTable";

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts().then((response) => setContacts(response.data));
  }, []);

  const handleSave = (data) =>
    createContact(data).then(() =>
      fetchContacts().then((res) => setContacts(res.data))
    );

  const handleEdit = (updatedContact) =>
    updateContact(updatedContact._id, updatedContact).then(() =>
      fetchContacts().then((res) => setContacts(res.data))
    );

  const handleDelete = (id) =>
    deleteContact(id).then(() =>
      fetchContacts().then((res) => setContacts(res.data))
    );

  return (
    <div>
      <ContactForm onSave={handleSave} />
      <ContactsTable
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ContactPage;
