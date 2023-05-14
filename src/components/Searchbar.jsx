import React, { useRef } from 'react';
import { useStore } from 'zustand';
import { movieStore } from '../store';

const Searchbar = () => {
    const { setQuery } = useStore(movieStore);
    const inputRef = useRef();

    // handle submit after click on search button
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return alert("please enter something");
        setQuery(inputRef.current.value)  // update query with Zustand setQuery function
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit} className='searchbar'>
            <input ref={inputRef} type="text" placeholder='Search Movie' />
            <button input="submit">Search</button>
        </form>
    )
}

export default Searchbar