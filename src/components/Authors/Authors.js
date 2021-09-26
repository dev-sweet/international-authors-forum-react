import React, { useEffect, useState } from 'react';
import AddedAuthors from '../AddedAuthors/AddedAuthors';
import Author from '../Author/Author';
import './Authors.css'

const Authors = () => {
    const [authors,setAuthors] = useState([]);
    const [selectedAuthors,setSelectedAuthor] = useState([]);
    useEffect(()=>{
        fetch('./authors.json')
        .then(res => res.json())
        .then(data => setAuthors(data));
    },[]);
    const handleClick = (author) =>{
        setSelectedAuthor([...selectedAuthors,author]);
    }
    return (
        <div className="authors-container">
            <div className="authors">
                {
                    authors.map(author => <Author key={author.key} author={author} handleClick={handleClick} />)
                }
            </div>
            <div className="added-author">
                <AddedAuthors selectedAuthors={selectedAuthors} />
            </div>
        </div>
    );
};

export default Authors;