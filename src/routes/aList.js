import React, { useState } from 'react';

import './aList.scss';

const USERS = [];

function AList() {
    var timestamp = (new Date()).getTime();

    // the value of the search field 
    const [name, setName] = useState('');

    // all users
    const [allUsers, setAllUsers] = useState(USERS);

    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = allUsers.filter((user) => {
            return user.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(allUsers);
        }

        setName(keyword);
    };

    const deleteById = id => {
        const newUsers = allUsers.filter((person) => person.id !== id);
        setAllUsers(newUsers);
        setFoundUsers(newUsers);
    }
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
                        <span className="user-name">{user.name} and {user.id}</span>
                        <button onClick={() => deleteById(user.id) }>X</button>
                    </li>
                    ))
                ) : (
                    <div>
                        {allUsers.length == 0 ? (
                            <div>
                                <div>emptyy</div>
                                <button onClick={() => {
                                setName('');
                                allUsers.push({
                                  name: name,
                                  id: timestamp
                                });
                                setFoundUsers(allUsers);
                                }}>Add</button>
                            </div>
                        ) : (
                            <div>
                                <h1>No results found!</h1>
                                <button onClick={() => {
                                setName('');
                                allUsers.push({
                                  name: name,
                                  id: timestamp
                                });
                                setFoundUsers(allUsers);
                                }}>Add</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AList;