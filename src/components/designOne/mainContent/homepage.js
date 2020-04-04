import React from 'react';
import Showcase from './showcase/showcase';
import Homecards from './homecards/homecards';

const Homepage = () =>{
    return(
        <div className="homepage">
            <Showcase/>
            <Homecards/>
        </div>
    );
}

export default Homepage;