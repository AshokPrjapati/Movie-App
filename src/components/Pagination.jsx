import React from 'react'

const Pagination = ({ currentPage, handlePage, total }) => {

    let totalPages = Math.ceil(total / 10); // 10 per page by deafault
    const btns = [];
    for (let i = 1; i <= totalPages; i++) {
        btns.push(i);
    }


    return (
        <div className='pagination'>
            {/* button for previous page */}
            <button disabled={currentPage === 1} onClick={() => handlePage(currentPage - 1)}>Prev</button>
            {/* button to direct visit a specific page */}
            {btns.length !== 0 && btns.map(btn => <button key={btn} className={currentPage === btn ? "active" : ""} onClick={() => handlePage(btn)}>{btn}</button>)}
            {/* button for next page */}
            <button disabled={currentPage === totalPages} onClick={() => handlePage(currentPage + 1)}>Next</button>
        </div>
    )
}

export default Pagination