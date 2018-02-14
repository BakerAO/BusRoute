import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchRoute from './components/search_route';
import ShowTime from './components/show_time';
import ShowRoutes from './components/show_routes';
import ShowDirections from './components/show_directions';

class BusRoutes extends React.Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            results: [],
            time: ''
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
                <div>
                    <ShowTime time={this.state.results} />
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <ShowRoutes />
                    </div>
                    <div className="col-sm-4">
                        <ShowDirections />
                    </div>
                    <div className="col-sm-4">
                        
                    </div>
                </div>
                

            </div>
        );

    }
}

ReactDOM.render(
    <BusRoutes />
    , document.querySelector('.container')
);