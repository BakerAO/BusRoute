import React from 'react';
import axios from 'axios';


class SearchRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            route: '5',
            direction: '4',
            stop: '7SOL'
        };
        this.onRouteChange = this.onRouteChange.bind(this);
        this.onStopChange = this.onStopChange.bind(this);
        this.onDirectionChange = this.onDirectionChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onRouteChange(event){
        this.setState({ route: event.target.value });
    }
    
    onDirectionChange(event){
        this.setState({ direction: event.target.value });
    }
    
    onStopChange(event){
        this.setState({ stop: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onCompleteSubmit(this.state.route, this.state.direction, this.state.stop);
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    
                    placeholder="Enter a bus route"
                    className = 'form-control'
                    value={this.state.route}
                    onChange={this.onRouteChange} 
                />
                <input 
                    placeholder="Enter a bus direction"
                    className = 'form-control'
                    value={this.state.direction}
                    onChange={this.onDirectionChange} 
                />
                <input 
                    placeholder="Enter a bus stop"
                    className = 'form-control'
                    value={this.state.stop}
                    onChange={this.onStopChange} 
                />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

export default SearchRoute;