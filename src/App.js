import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ProductPage from './ProductPage.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ProductPage {...routerProps} />} 
                        />
                        <Route 
                          path="/:id" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}