import React from 'react';
import {Container, Button, Col, Row} from "react-bootstrap";
import {InvestCarousel} from '../Carousel/InvestCarousel';
import {ObjectCarousel} from "../Carousel/ObjectCarousel";
import {SquadCarousel} from "../Carousel/SquadCarousel";
import {SquadCarouselDeletable} from "../Carousel/SquadCarousel";
import API from '../../utils/API';
import {UsabilityCarousel} from "../Carousel/UsabilityCarousel";

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            members: 1,
            studies: 1
        };
    }

    start() {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    addMember() {
        this.setState({
            members: this.state.members + 1
        });
    }

    addStudy() {
        this.setState({
            studies: this.state.studies + 1
        });
    }

    render() {
        return (
            <Container>
                {this.state.isPlaying === false
                    ? <Button variant="outline-light" onClick={this.start.bind(this)}>Start Game</Button>
                    : <Container>
                        <ObjectCarousel/>
                        <InvestCarousel/>
                        <SquadCarousel/>
                        {this.state.members === 2 && <SquadCarousel/>}
                        {this.state.members === 3 && <div><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members === 4 &&
                        <div><SquadCarousel/><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members === 5 &&
                        <div><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members === 6 &&
                        <div><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members === 7 &&
                        <div>
                            <SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/>
                        </div>}
                        {this.state.members === 8 &&
                        <div>
                            <SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/>
                        </div>}
                        {this.state.members === 9 &&
                        <div>
                            <SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/>
                        </div>}
                        {this.state.members === 10 &&
                        <div>
                            <SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/>
                        </div>}
                        {this.state.members !== 10 && <Col md={{span: 8, offset: 2}}>
                            <Button variant="light" size="lg" block onClick={this.addMember.bind(this)}>
                                Ajouter un membre à l'équipe
                            </Button>
                        </Col>}
                        <br/>
                        <UsabilityCarousel/>
                        {this.state.studies === 2 && <UsabilityCarousel/>}
                        {this.state.studies === 3 && <div><UsabilityCarousel/><UsabilityCarousel/></div>}
                        {this.state.studies === 4 &&
                        <div><UsabilityCarousel/><UsabilityCarousel/><UsabilityCarousel/></div>}
                        {this.state.studies === 5 &&
                        <div><UsabilityCarousel/><UsabilityCarousel/><UsabilityCarousel/><UsabilityCarousel/></div>}
                        {this.state.studies !== 5 && <Col md={{span: 8, offset: 2}}>
                            <Button variant="light" size="lg" block onClick={this.addStudy.bind(this)}>
                                Ajouter une étude d'utilisabilité
                            </Button>
                        </Col>}
                    </Container>
                }
            </Container>
        )
    }
}