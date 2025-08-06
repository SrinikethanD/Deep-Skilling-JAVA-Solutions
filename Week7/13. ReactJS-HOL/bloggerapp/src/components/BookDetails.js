import React from 'react';
import { books } from '../data';

const BookDetails = ({ showPrices = true }) => {
    const bookdet = (
        <ul>
            {books.map((book) => (
                <div key={book.id}>
                    <h3>{book.bname}</h3>
                    {showPrices && <h4>{book.price}</h4>}
                </div>
            ))}
        </ul>
    );
    return (
        <div className="st2">
            <h1>Book Details</h1>
            {/* Conditional rendering using ternary operator */}
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                bookdet
            )}
        </div>
    );
};

export default BookDetails;
