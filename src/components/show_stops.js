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

    }

    onHideStopsClick(){

    }

    setUrl(){

    }
    
    getData(){

    }

    renderStops(){

    }
    
    render(){
        return (
            <div>

            </div>
        );
    }
}

export default ShowStops;