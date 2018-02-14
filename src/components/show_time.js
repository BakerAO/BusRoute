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
        try{
            return (
                <div>
                    {this.props.time[0].DepartureText}
                </div>
            );
        }catch(err){
            console.log(err);
            return (
                <div>
                    Invalid Route/Direction/Stop
                </div>
            );
        }
    }
}

export default ShowTime;