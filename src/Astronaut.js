import React from 'react';

const Astronaut = ({astronaut}) => {

    return(
        <div>
            <h1>{astronaut.name}</h1>
            <p>Craft: {astronaut.craft}</p>
        </div>
    )

}

export default Astronaut