import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Author.css'
const Author = (props) => {
    const {name,img,dateOfBirth,popularBook,country,salary} = props.author;
    return (
        <div className="author">
           <div className="author-image">
              <img src={img} alt="" />
           </div>
           <div className="author-details">
                <h2>{name}</h2>
                <p>Date Of Birth : {dateOfBirth}</p>
                <p>Country : {country}</p>
                <p>Popular book : {popularBook}</p>
                <p>Salary : {salary}</p>
             </div>
             <button className="regular-btn" onClick={()=>props.handleClick(props.author)}><FontAwesomeIcon icon={faCartPlus} /> buy now</button>
        </div>
    );
};

export default Author;