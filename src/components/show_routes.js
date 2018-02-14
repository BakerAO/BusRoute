import React from 'react';
import axios from 'axios';

class ShowRoutes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        };
        this.sendTerms = this.setUrl.bind(this);
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
    
    setUrl(){
        const ROOT_URL = 'http://svc.metrotransit.org/NexTrip/';
        const url = `${ROOT_URL}Routes`;
        this.getData(url);
    }

    render(){
        console.log(this);
        return(
            <div>
                
                

            </div>
        );

    }
}

export default ShowRoutes;
