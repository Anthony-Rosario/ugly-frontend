import React, { Component } from 'react';
import request from 'superagent';

export default class DetailPage extends Component {
    state = {
        skateboards: {},
    }

    componentDidMount = async () => {
        
        const data = await request.get(`https://express-dummy-data.herokuapp.com/skateboards/${this.props.match.params.id}`)
        
        this.setState({
            skateboards: data.body.result
        })
        console.log(data.body.result)
    }
    render() {
        return (
            <div>
               <p>name: {this.state.skateboards.name}</p> 
               <p>category: {this.state.skateboards.category}</p> 
               <p>description: {this.state.skateboards.description}</p>
            </div>
        )
    }
}
