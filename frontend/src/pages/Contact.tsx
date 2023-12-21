import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Contact as ContactType} from './Contacts';

const Contact: React.FC= () => {
  let params = useParams();
  let contactID = params.id
  let [contact, setContact] = useState<ContactType| null>(null);

  useEffect(() => {
    if (contactID !== 'add') getContact();
  }
  , [contactID]);

  console.log(contactID)

  let getContact = async () => {
    let response = await fetch(`http://localhost:8000/api/v1/contacts/${contactID}`);
    let data = await response.json();
    console.log(data);
    setContact(data);
  }

  return (
    <div className='flex flex-col gap-2 py-2'>
      <h3 className='text-3xl'>Contact Details</h3>
      <Link to ={'/'}>Back</Link>
      {contactID !== 'add' && (
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
      )}
      <div className="contact-form">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input type="text" className="form-input mt-1 block w-full" placeholder="" value={contact?.name} />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input type="text" className="form-input mt-1 block w-full" placeholder="

          " value={contact?.email} />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone</span>
          <input type="text" className="form-input mt-1 block w-full" placeholder="123-456-7890" value={contact?.phone} />
        </label>
        <label className="block">
          <span className="text-gray-700">Service Area</span>
          <input type="text" className="form-input mt-1 block w-full" placeholder="IT" value={contact?.service_area} />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </div>
    </div>
  );
};


export default Contact;
