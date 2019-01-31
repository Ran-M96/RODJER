import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Game} from './components/Game/Game.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <Switch>
                        <Route exact path="/" component={Game}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;