import React from 'react';

const Cards = ({name,email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 '>
            <img alt = "An was supposed to be here" src = {`https://robohash.org/${name}`} />
    <h1>{name}</h1>
    <p>{email}</p>
        </div>
    );
}


const CardList = (props) => {
    const robots = props.robot;
    return(
        <div>
            {
                robots.map((robot,id) => {
                    return(
                        <Cards key = {id} name={robots[id].name} email={robots[id].email }/>

                    );
                })
            }
        </div>
    );

    }



export default CardList;

