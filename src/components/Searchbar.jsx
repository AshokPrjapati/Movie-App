import React, { useRef } from 'react'

const Searchbar = ({ handleQuery }) => {

    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleQuery(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
            <button input="submit">Search</button>
        </form>
    )
}

export default Searchbar