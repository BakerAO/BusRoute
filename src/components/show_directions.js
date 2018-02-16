import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class ShowDirections extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            directions: [],
            showList: false
        };

        this.onShowDirectionsClick = this.onShowDirectionsClick.bind(this);
        this.onHideDirectionsClick = this.onHideDirectionsClick.bind(this);
        this.renderDirections = this.renderDirections.bind(this);
        this.setUrl = this.setUrl.bind(this);
        this.getData = this.getData.bind(this);
    }
    
    onShowDirectionsClick(){
        this.setState({
            showList: true
        });
        this.setUrl(this.props.selectedRoute);
    }

    onHideDirectionsClick(){
        this.setState({
            showList: false
        });
    }

    setUrl(routeNumber){
        const ROOT_URL = 'http://svc.metrotransit.org/NexTrip/';
        const url = `${ROOT_URL}Directions/${routeNumber}`;
        this.getData(url);
    }

    getData(url){
        axios.get(url)
            .then( (response) => {
                this.setState({
                    directions: response.data
                });
            })
            .catch( (error) => {
                console.log(error);
            })
        ;
    }

    onDirectionClick(direction){
        this.props.onSelectDirection(direction);
    }

    renderDirections(){
        return _.map(this.state.directions, direction => {
            return (
                <li className="list-group-item" key={direction.Value} onClick={() => this.onDirectionClick(direction)} >
                    {direction.Text}
                </li>
            );
        });
    }
    
    render(){
        return(
            <div>
                <button
                    className="btn btn-primary"
                    onClick={this.onShowDirectionsClick.bind(this)}
                >
                    Select Direction
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={this.onHideDirectionsClick.bind(this)}
                >
                    Hide
                </button>
                <ul className="list-group">
                    {this.state.showList ? this.renderDirections() : ''}
                </ul>
            </div>
       );
    }
}

export default ShowDirections;