import React, { Component } from 'react';
import request from 'superagent';
import SkateboardList from './SkateboardList.js';
import './App.css'





export default class SearchPage extends Component {
    state = {
        skateboards: [],
    }
    

    componentDidMount = async () => {
        const data = await request.get(`https://express-dummy-data.herokuapp.com/skateboards`)

        this.setState({
            skateboards: data.body.result,
        })

    }

    render() {

        return (
            <div>
                <SkateboardList skateboards={this.state.skateboards} />
            </div>
        );
    }
}
