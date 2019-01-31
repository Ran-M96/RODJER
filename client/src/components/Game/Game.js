import React from 'react';
import {Container, Button, Col, Card, Carousel} from "react-bootstrap";
import {InvestCarousel} from '../Carousel/InvestCarousel';
import {ObjectCarousel} from "../Carousel/ObjectCarousel";
import {SquadCarousel} from "../Carousel/SquadCarousel";
import {UsabilityCarousel} from "../Carousel/UsabilityCarousel";
import {UserCarousel} from "../Carousel/UserCarousel";
import {ModelCarousel} from "../Carousel/ModelCarousel";
import {TemporalCarousel} from "../Carousel/TemporalCarousel";
import API from '../../utils/API';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            members: 1,
            studies: 1,
            indexObject: 0,
            indexInvest: 0,
            indexSquad1: 0,
            indexSquad2: 0,
            indexSquad3: 0,
            indexSquad4: 0,
            indexSquad5: 0,
            indexUsability1: 0,
            indexUsability2: 0,
            indexUsability3: 0,
            indexUser: 0,
            indexModel: 0,
            indexTemporal: 0,
            directionObject: null,
            directionInvest: null,
            directionSquad: null,
            directionUsability: null,
            directionUser: null,
            directionModel: null,
            directionTemporal: null,
        };
        this.handleSelectInvest = this.handleSelectInvest.bind(this);
        this.handleSelectObject = this.handleSelectObject.bind(this);
    }

    start() {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    handleSelectObject(selectedIndex, e) {
        console.log(this.state)
        this.setState({
            indexObject: selectedIndex,
            directionObject: e.direction,
        });
    }

    handleSelectInvest(selectedIndex, e) {
        this.setState({
            indexInvest: selectedIndex,
            directionInvest: e.direction,
        });
    }

    handleSelectSquad1(selectedIndex, e) {
        this.setState({
            indexSquad1: selectedIndex,
            directionSquad1: e.direction,
        });
    }

    handleSelectSquad2(selectedIndex, e) {
        this.setState({
            indexSquad2: selectedIndex,
            directionSquad2: e.direction,
        });
    }

    handleSelectSquad3(selectedIndex, e) {
        this.setState({
            indexSquad3: selectedIndex,
            directionSquad3: e.direction,
        });
    }

    handleSelectSquad4(selectedIndex, e) {
        this.setState({
            indexSquad4: selectedIndex,
            directionSquad4: e.direction,
        });
    }

    handleSelectSquad5(selectedIndex, e) {
        this.setState({
            indexSquad5: selectedIndex,
            directionSquad5: e.direction,
        });
    }

    handleSelectUsability1(selectedIndex, e) {
        this.setState({
            indexUsability1: selectedIndex,
            directionUsability1: e.direction,
        });
    }

    handleSelectUsability2(selectedIndex, e) {
        this.setState({
            indexUsability2: selectedIndex,
            directionUsability2: e.direction,
        });
    }

    handleSelectUsability3(selectedIndex, e) {
        this.setState({
            indexUsability3: selectedIndex,
            directionUsability3: e.direction,
        });
    }

    handleSelectUser(selectedIndex, e) {
        this.setState({
            indexUser: selectedIndex,
            directionUser: e.direction,
        });
    }

    handleSelectModel(selectedIndex, e) {
        this.setState({
            indexModel: selectedIndex,
            directionModel: e.direction,
        });
    }

    handleSelectTemporal(selectedIndex, e) {
        this.setState({
            indexTemporal: selectedIndex,
            directionTemporal: e.direction,
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
                <br/>
                {this.state.isPlaying === false
                    ? <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Card>
                                <Card.Body>Bonjour, vous allez ici découvrir les modalités du challenge de projets
                                    innovants. Le challenge de projet innovant est une composante importante de notre
                                    formation, vous n'en avez pas forcément conscience mais à chaque instant dans les
                                    projets importants, les professeurs nous test et test la robustesse de ces projets
                                    ainsi que leurs potentiels finalités. Dans le cadre d'une approche plus complète
                                    nous allons vous donner les clés pour évaluer un projet non pas étudiant cette fois,
                                    mais un véritable projet d'entreprise ou de recherche. Bienvenue sur
                                    RODJER.</Card.Body>
                            </Card>
                            <br/>
                            <Button variant="outline-light" onClick={this.start.bind(this)} block>Start Game</Button>
                        </Col>
                    </Container>
                    : <Container>
                        <ObjectCarousel activeIndex={this.state.indexObject} direction={this.state.directionObject}
                                        onSelect={this.handleSelectObject}/>
                        <InvestCarousel activeIndex={this.state.indexInvest} direction={this.state.directionInvest}
                                        onSelect={this.handleSelectInvest}/>
                        <SquadCarousel/>
                        {this.state.members === 2 && <SquadCarousel/>}
                        {this.state.members === 3 && <div><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members === 4 &&
                        <div><SquadCarousel/><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members === 5 &&
                        <div><SquadCarousel/><SquadCarousel/><SquadCarousel/><SquadCarousel/></div>}
                        {this.state.members !== 5 && <Col md={{span: 8, offset: 2}}>
                            <Button variant="outline-light" size="lg" block onClick={this.addMember.bind(this)}>
                                + Ajouter un membre à l'équipe
                            </Button>
                        </Col>}
                        <br/>
                        <UsabilityCarousel/>
                        {this.state.studies === 2 && <UsabilityCarousel/>}
                        {this.state.studies === 3 && <div><UsabilityCarousel/><UsabilityCarousel/></div>}
                        {this.state.studies !== 3 && <Col md={{span: 8, offset: 2}}>
                            <Button variant="outline-light" size="lg" block onClick={this.addStudy.bind(this)}>
                                + Ajouter une étude d'utilisabilité
                            </Button>
                        </Col>}
                        <br/>
                        <UserCarousel/>
                        <ModelCarousel/>
                        <TemporalCarousel/>
                        <Col md={{span: 8, offset: 2}}>
                            <Button variant="danger" size="lg" block>
                                Valider le projet
                            </Button>
                        </Col>
                        <br/>
                    </Container>
                }
            </Container>
        )
    }
}