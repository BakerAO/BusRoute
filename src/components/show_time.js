import React from 'react';

class ShowTime extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            
        };
        this.props.time[0] = {
            DepartureText: ''
        };
    }

    render(){
        return (
            <div>
                {this.props.time[0].DepartureText}
            </div>
        );
    }
}

export default ShowTime;