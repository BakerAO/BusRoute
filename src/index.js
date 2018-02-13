import React from 'react';
import ReactDOM from 'react-dom';

import SearchRoute from './components/search_route';

class BusRoutes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            results: null
        };

    }

    render(){
        return(
            <div>
                <SearchRoute />


            </div>
        );

    }
}

ReactDOM.render(
    <BusRoutes />
    , document.querySelector('.container')
);