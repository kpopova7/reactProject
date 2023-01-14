import React, { useState } from 'react';

import './aList.scss';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { name: 'Andy'},
  { name: 'Bob'},
  { name: 'Tom Hulk'},
  { name: 'Audra'},
  { name: 'Anna'},
  { name: 'Tom'},
  { name: 'Tom Riddle'},
  { name: 'Bolo'},
];

function AList() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);

  };

  return (
    <div className="container">
      <input
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />


      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-name">{user.name}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );


  
}

export default AList;