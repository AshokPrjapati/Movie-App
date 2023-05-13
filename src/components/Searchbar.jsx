import React, { useRef } from 'react'

const Searchbar = ({ handleQuery }) => {

    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return alert("please enter something");
        handleQuery(inputRef.current.value)
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