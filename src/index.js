import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchRoute from './components/search_route';

class BusRoutes extends React.Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            results: []
        };
        this.sendTerms = this.sendTerms.bind(this);
        this.getData = this.getData.bind(this);
        
    }
    
    getData = function(url){
            axios.get(url)
                .then( (response) => {
                    this.setState({
                        results: response.data
                    });
                })
                .catch( (error) => {
                    console.log(error);
                });
    }
    
    sendTerms(route, direction, stop){
        const ROOT_URL = 'http://svc.metrotransit.org/NexTrip/';
        const url = `${ROOT_URL}${route}/${direction}/${stop}`;
        this.getData(url);
    }

    render(){
        console.log(this);
        return(
            <div>
                <SearchRoute onCompleteSubmit={this.sendTerms} />
                <br />
                

            </div>
        );

    }
}

ReactDOM.render(
    <BusRoutes />
    , document.querySelector('.container')
);