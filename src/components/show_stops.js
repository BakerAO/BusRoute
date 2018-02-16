import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class ShowStops extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            showList: false,
            stops: []
        };
        
        this.onShowStopsClick = this.onShowStopsClick.bind(this);
        this.onHideStopsClick = this.onHideStopsClick.bind(this);
        this.renderStops = this.renderStops.bind(this);
        this.setUrl = this.setUrl.bind(this);
        this.getData = this.getData.bind(this);
    }

    onShowStopsClick(){
        this.setState({
            showList: true
        });
        this.setUrl(this.props.selectedRoute, this.props.selectedDirection);
    }

    onHideStopsClick(){
        this.setState({
            showList: false
        });
    }

    setUrl(routeNumber, directionNumber){
        const ROOT_URL = 'http://svc.metrotransit.org/NexTrip/';
        const url = `${ROOT_URL}Stops/${routeNumber}/${directionNumber}`;
        this.getData(url);
    }
    
    getData(url){
        axios.get(url)
            .then( (response) => {
                this.setState({
                    stops: response.data
                });
            })
            .catch( (error) => {
                console.log(error);
            })
        ;
    }

    onStopClick(stop){
        this.props.onSelectStop(stop);
    }

    renderStops(){
        return _.map(this.state.stops, stop => {
            return (
                <li className="list-group-item" key={stop.Value} onClick={() => this.onStopClick(stop)} >
                    {stop.Text}
                </li>
            );
        });
    }

    render(){
        return (
            <div>
                <button
                    className="btn btn-primary"
                    onClick={this.onShowStopsClick.bind(this)}
                >
                    Select a Stop
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={this.onHideStopsClick.bind(this)}
                >
                    Hide
                </button>
                <ul className="list-group">
                    {this.state.showList ? this.renderStops() : ''}
                </ul>
            </div>
        );
    }
}

export default ShowStops;