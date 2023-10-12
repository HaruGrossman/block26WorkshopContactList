import React from 'react';
import ContactList from './Components/ContactList';
import './App.css'  // do some styling in the css
// import { useState } from 'react';

//call the hook after the useState declaration, passing it an empty single callback function
function App() {
  // const [contacts, setContacts] = useState(dummyContacts)
  // console.log("Contacts: ", contacts)
  return (
    <>
      <ContactList />
    </>
  );
}

export default App

