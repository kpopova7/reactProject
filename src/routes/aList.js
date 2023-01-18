import './aList.scss';

import React from 'react';

const { useState, useEffect} = React;

const USERS = [
    {id: 1, name: 'Hello World'},
    {id: 2, name: 'Installation'},
    {id: 3, name: 'Hello World'},
    {id: 4, name: 'Installation'},
    {id: 5, name: 'Hello World'},
    {id: 6, name: 'Installation'},
    {id: 7, name: 'Hello World'},
    {id: 8, name: 'Installation'},
    {id: 9, name: 'Hello World'},
    {id: 10, name: 'Installation'},
];

function AList() {

    // (function() {
    //     var removeSuccess;
      
    //     removeSuccess = function() {
    //       return $('.button').removeClass('success');
    //     };
      
    //     $(document).ready(function() {
    //       return $('.button').click(function() {
    //         $(this).addClass('success');
    //         return setTimeout(removeSuccess, 3000);
    //       });
    //     });
      
    //   }).call(this);




    const Modal = ({ onRequestClose }) => {
        // Use useEffect to add an event listener to the document
        useEffect(() => {
            function onKeyDown(event) {
                if (event.keyCode === 27) {
                    // Close the modal when the Escape key is pressed
                    onRequestClose();
                }
            }
    
            // Prevent scolling
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", onKeyDown);
    
            // Clear things up when unmounting this component
            return () => {
                document.body.style.overflow = "visible";
                document.removeEventListener("keydown", onKeyDown);
            };
        });
    
        return (
            <div className="modal__backdrop">
                <div className="modal__container">
                    <h3 className="modal__title">I'm a modal!</h3>
                    <p>
                        When this modal is open, we disable scrolling the <code>body</code> using{" "}
                        <code>overflow: hidden</code>. This allows users to scroll the modal
                        without losing their position on the page.
                    </p>
                    <p>
                        To close this modal, press the button below or use the Escape key on desktop.
                    </p>
                    <button type="button" onClick={onRequestClose}>
                        Close this modal
                    </button>
                </div>
            </div>
        );
    };
    const [isModalOpen, setModalIsOpen] = useState(false);
	
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

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
            {/* {isModalOpen && <Modal onRequestClose={toggleModal} />} */}
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
                        <a class="modal-link"
                          href={toggleModal}
                          onClick={toggleModal}
                        >
                          {user.name} and {user.id}
                        </a>

                        {isModalOpen && <Modal onRequestClose={toggleModal} />}
                        <button class="btn btn-delete" onClick={() => deleteById(user.id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </li>
                    ))
                ) : (
                    <div>
                        {allUsers.length === 0 ? (
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