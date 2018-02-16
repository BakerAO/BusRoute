import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchRoute from './components/search_route';
import ShowTime from './components/show_time';
import ShowRoutes from './components/show_routes';
import ShowDirections from './components/show_directions';
import ShowStops from './components/show_stops';

class BusRoutes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            time: '',
            routeNumber: '',
            directionNumber: '',
            stopNumber: '',
            routeName: '',
            directionName: '',
            stopName: ''
        };

        this.sendTerms = this.sendTerms.bind(this);
        this.getData = this.getData.bind(this);
        this.setRoute = this.setRoute.bind(this);
        this.setDirection = this.setDirection.bind(this);
        this.setStop = this.setStop.bind(this);
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
            })
        ;
    }
    
    sendTerms(route, direction, stop){
        const ROOT_URL = 'http://svc.metrotransit.org/NexTrip/';
        const url = `${ROOT_URL}${route}/${direction}/${stop}`;
        this.getData(url);
    }

    setRoute(route){
        this.setState({
            routeNumber: route.Route,
            routeName: route.Description
        });
    }

    setDirection(direction){
        this.setState({
            directionNumber: direction.Value,
            directionName: direction.Text
        });
    }

    setStop(stop){
        this.setState({
            stopNumber: stop.Value,
            stopName: stop.Text
        });
    }

    render(){
        console.log(this);
        return(
            <div>
                <h1 align="center">Minneapolis Mertro Transit</h1>
                <br />
                <div>
                    <h2 align="center">
                        <ShowTime time={this.state.results} />
                    </h2>
                    <p>{this.state.routeName}</p>
                    <p>{this.state.directionName}</p>
                    <p>{this.state.stopName}</p>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3">
                        <ShowRoutes 
                            onSelectRoute={this.setRoute} 
                        />
                    </div>
                    <div className="col-sm-3">
                        <ShowDirections 
                            selectedRoute={this.state.routeNumber}
                            onSelectDirection={this.setDirection}
                        />
                    </div>
                    <div className="col-sm-3">
                        <ShowStops
                            selectedRoute={this.state.routeNumber}
                            selectedDirection={this.state.directionNumber}
                            onSelectStop={this.setStop}
                        />
                    </div>
                    <div className="col-sm-3">
                        <button 
                            className="btn btn-primary" 
                            onClick={() => this.sendTerms(this.state.routeNumber, this.state.directionNumber, this.state.stopNumber)}
                        >
                            Submit
                        </button>
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