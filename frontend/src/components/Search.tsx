import React, { useState } from 'react';

interface Contact {
  id: number;
  name: string;
}

interface SearchProps {
  contacts: Contact[];
}

const Search: React.FC<SearchProps> = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search contacts" />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
