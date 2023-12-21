import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ListItem from '../components/ListItem';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  service_area: string;
}

const Contacts: React.FC = () => {
  
  let [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    getContacts();
  }
  , []);
  let getContacts = async () => {
    let response = await fetch('http://localhost:8000/api/v1/contacts');
    let data = await response.json();
    setContacts(data);
  }

  return (
    <div className='flex flex-col gap-2 py-2'>
      <h2 className='text-3xl'>Contact List</h2>
    
      <Link className ='text-blue-200 bg-blue-700 py-2 mx-4 my-2 rounded-md hover:bg-blue-400 hover:text-blue-200' to ={'/add'}>Add Contact</Link>
      
      <ul className='grid gap-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
        {contacts.map((contact) => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
