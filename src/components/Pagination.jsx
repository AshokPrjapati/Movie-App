import React from 'react';
import { useStore } from 'zustand';
import { movieStore } from '../store';


const Pagination = ({ total }) => {
    const { page, setPage } = useStore(movieStore);

    let totalPages = Math.ceil(total / 10); // 10 per page by deafault
    const btns = [];
    for (let i = 1; i <= totalPages; i++) {
        btns.push(i);
    }

    const handlePage = (value) => setPage(value); // update page with Zustand setPage function

    return (
        <div className='pagination'>
            {/* button for previous page */}
            <button disabled={page === 1} onClick={() => handlePage(page - 1)}>Prev</button>
            {/* button to direct visit a specific page */}
            {btns.length !== 0 && btns.map(btn => <button key={btn} className={page === btn ? "active" : ""} onClick={() => handlePage(btn)}>{btn}</button>)}
            {/* button for next page */}
            <button disabled={page === totalPages} onClick={() => handlePage(page + 1)}>Next</button>
        </div>
    )
}

export default Pagination