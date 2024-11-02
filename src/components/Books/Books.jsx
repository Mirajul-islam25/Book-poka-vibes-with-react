import React, { useEffect, useState } from 'react';

const Books = () => {
      
      const [books, setBooks] = useState([]);

      useEffect(() => {
            fetch('./booksData.json')
            .then(Response => Response.json())
            .then(data => setBooks(data))
      },[])


      return (
            <div>
                  <h2 className="text-5xl">Books</h2>
                  <p>{books.length}</p>
            </div>
      );
};

export default Books;