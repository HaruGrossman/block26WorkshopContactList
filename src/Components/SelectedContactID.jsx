import React from 'react';
import ContactList from './ContactList'

function SelectedContactID({ contact }) {
  return (
    contact.map((contact) => {
      return (<ContactList key={contact.id} contact={contact.name} username={contact.username} email={contact.email} address={contact.address} phone={contact.phone} website={contact.website} company={contact.company}/>)
    })
  )
}

export default SelectedContactID