import React from 'react';

class ShowDirections extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showList: false
        };
        this.onShowDirectionsClick = this.onShowDirectionsClick.bind(this);
        this.onHideDirectionsClick = this.onHideDirectionsClick.bind(this);
        this.renderDirections = this.renderDirections.bind(this);
    }
    
    onShowDirectionsClick(){
        this.setState({
            showList: true
        });
    }

    onHideDirectionsClick(){
        this.setState({
            showList: false
        });
    }
    
    renderDirections(){
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    1: Southbound
                </li>
                <li className="list-group-item">
                    2: Eastbound
                </li>
                <li className="list-group-item">
                    3: Westbound
                </li>
                <li className="list-group-item">
                    4: Northbound
                </li>
            </ul>
        );
    }


    render(){
       return(
            <div>
                <button
                    className="btn btn-primary"
                    onClick={this.onShowDirectionsClick.bind(this)}
                >
                    Show Directions
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={this.onHideDirectionsClick.bind(this)}
                >
                    Hide
                </button>
                {this.state.showList ? this.renderDirections() : ''}
            </div>
       );
    }
}

export default ShowDirections;