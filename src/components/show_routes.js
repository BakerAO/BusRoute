import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class ShowRoutes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            showList: false
        };
        
        this.sendTerms = this.setUrl.bind(this);
        this.getData = this.getData.bind(this);
        this.onShowRoutesClick = this.onShowRoutesClick.bind(this);
        this.renderRoutes = this.renderRoutes.bind(this);
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
    
    setUrl(){
        const ROOT_URL = 'http://svc.metrotransit.org/NexTrip/';
        const url = `${ROOT_URL}Routes`;
        this.getData(url);
    }

    onShowRoutesClick(){
        this.setState({
            showList: true
        });
        this.setUrl();
    }

    onHideRoutesClick(){
        this.setState({
            showList: false
        });
    }

    renderRoutes(){
        return _.map(this.state.results, route => {
            return (
                <li className="list-group-item" key={route.Route}>
                    {route.Description}
                </li>
            );
        });
    }


    render(){
        return(
            <div>
                <button
                    className="btn btn-primary"
                    onClick={this.onShowRoutesClick.bind(this)}
                >
                    Show Routes
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={this.onHideRoutesClick.bind(this)}
                >
                    Hide
                </button>
                <ul className="list-group">
                    {this.state.showList ? this.renderRoutes() : '' }
                </ul>
                

            </div>
        );

    }
}

export default ShowRoutes;
