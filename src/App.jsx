import React from 'react';
import ContactList from './Components/ContactList';
import SelectedContactID from './Components/SelectedContactID'
import './App.css'  // do some styling in the css
import { useState } from 'react';

//call the hook after the useState declaration, passing it an empty single callback function
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)  
  return (
    <>
    {selectedContactId? (<SelectedContactID/>) : (<ContactList />)}
    </>
  );
}

export default App

