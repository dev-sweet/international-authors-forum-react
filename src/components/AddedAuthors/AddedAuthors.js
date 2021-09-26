import React from 'react';
import './AddedAuthors.css'
const AddedAuthors = (props) => {
    const {selectedAuthors} = props;
    let totalCost = 0;
    let authorNames = [];
    
    for(let author of selectedAuthors){
        if(!authorNames.includes(author.name)){
            authorNames.push(author.name);
            totalCost = totalCost + author.salary
        }
    }
    const totalAuthors = authorNames.length

    return (
        <div className="selected-authors">
            <h3>Total Authors : {totalAuthors}</h3>
            <h3>Total Cost  : ${totalCost}</h3>
            <div className="authorNames">
                {
                    authorNames.map(name => <h4 key={name}>{name}</h4>)
                }
            </div>
        </div>
    );
};
export default AddedAuthors;