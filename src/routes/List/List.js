import React from 'react';
import Modal from '../../components/Modal/Modal';
import './List.scss';


const { useState } = React;

const POSITIVETHINGS = [
    {id: 1, text: 'Music'},
    {id: 2, text: 'Good health'},
    {id: 3, text: 'Financial security'},
    {id: 4, text: 'A loving partner'},
    {id: 5, text: 'Supporting family'},
    {id: 6, text: 'Time spent with frineds'},
    {id: 7, text: 'A Pleasant Work Environment'},
    {id: 8, text: 'Food'},
    {id: 9, text: 'Nature'},
    {id: 10, text: 'Music'},
];

function List() {
    const [currentListItem, setCurrentListItem] = useState();           // for the modal
    const [searchValue, setSearchValue] = useState('');                 // the value of the search field 
    const [allThings, setAllThings] = useState(POSITIVETHINGS);         // all elements in the list
    const [foundThings, setFoundThings] = useState(POSITIVETHINGS);     // the search result
    var timestamp = (new Date()).getTime();                             //used to make a uniqe ID for a newly added element

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = allThings.filter((searchedThing) => {
                return searchedThing.text.toLowerCase().startsWith(keyword.toLowerCase());
            });

            setFoundThings(results);
        } else {
            setFoundThings(allThings);
        }

        setSearchValue(keyword);
    };

    const pressEnter = (event) => {
        if (searchValue) {
            if (event.keyCode === 13) {
                if (searchValue) {
                    setSearchValue('');
                    allThings.push({
                      text: searchValue,
                      id: timestamp
                    });
                    setFoundThings(allThings);
                }
            }
        }
    }

    const deleteById = id => {
        const newThings = allThings.filter((oneThing) => oneThing.id !== id);

        setAllThings(newThings);
        setFoundThings(newThings);
    }

    return (
        <div className="container">
            <h1>A list of reasons to be happy:</h1>
            <input
                value={searchValue}
                onChange={filter}
                className="input"
                placeholder="Start typing to filter..."
                onKeyDown={pressEnter}
            />

            {currentListItem && <Modal item={currentListItem} close={setCurrentListItem} />}

            <ul className="positive-things-list">
                {foundThings && foundThings.length > 0 ? (
                    foundThings.map((foundThing) => (
                    <li key={foundThing.id} className="positive-thing glow-on-hover">
                        <button className="reason"
                            onClick={e => {
                                e.preventDefault();
                                setCurrentListItem(foundThing);
                            }}>
                          {foundThing.text}
                        </button>
                        <button className="btn btn-delete" onClick={() => deleteById(foundThing.id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </li>
                    ))
                ) : (
                    <div className="search-result">
                        {allThings.length === 0 ? (
                            <div className="empty-list">
                                <h2>Aw, nothing to show :( Maybe 
                                    <button 
                                    className="add-button"
                                    onClick={() => {
                                    if (searchValue) {
                                        setSearchValue('');
                                        allThings.push({
                                            text: searchValue,
                                            id: timestamp
                                        });
                                        setFoundThings(allThings);; 
                                    }
                                    else {
                                        alert("Please type something in the search field and THEN click the add button or enter!");
                                    }
                                    }}>Add</button> a reason?<br/>
                                    <span className="small-text">(you can also press Enter to add)</span>
                                </h2>
                            </div>
                        ) : (
                            <div className="not-found">
                                <h2>Reason not found, Would you like to 
                                    <button 
                                    className="add-button"
                                    onClick={() => {
                                        if (searchValue) {
                                            setSearchValue('');
                                            allThings.push({
                                                text: searchValue,
                                                id: timestamp
                                            });
                                            setFoundThings(allThings);; 
                                        }
                                        else {
                                            alert("Search empty, please type something in the search field and THEN click the add button or enter!");
                                        }
                                    }}>Add</button> the search to the list?<br/>
                                    <span className="small-text">(you can also press Enter to add)</span>
                                </h2>
                            </div>
                        )}
                    </div>
                )}
            </ul>
        </div>
    );
}


export default List;