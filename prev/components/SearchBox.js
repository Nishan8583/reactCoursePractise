import React from 'react';

const SearchBox = ({updateFunction}) => {
    return(
        <div>
            <input
            className = "pa3 ba b--green bg-lightest-blue" 
            type='search' 
            placeholder="stringToSearch" 
            onChange={updateFunction}
            />
        </div>
    );
}

export default SearchBox;