import React from 'react';
import {Button, FormGroup, FormControl} from "react-bootstrap";
import API from '../../utils/API';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Button variant="primary">Start Game</Button>
        )
    }
}