import React from 'react';
import {Container, Button, Col, Card, Badge} from "react-bootstrap";
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
            isSubmitted: false,
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
            priceGain: [
                {price: 150000},
                {price: 250000},
                {price: 100000},
                {price: 90000}
            ],
            priceInvest: [
                {price: 200000, handicap: 0.2},
                {price: 350000, handicap: 0.4},
                {price: 100000, handicap: 0}
            ],
            priceSquad: [
                {price: 3000},
                {price: 7000},
                {price: 4000},
                {price: 1500},
                {price: 3000},
                {price: 3500}
            ],
            priceUsability: [
                {price: 15000},
                {price: 20000},
                {price: 12000}
            ],
            priceUser: [
                {price: 40000},
                {price: 55000},
                {price: 30000},
                {price: 10000},
                {price: 15000}
            ],
            priceModel: [
                {price: 20000},
                {price: 10000},
                {price: 30000},
                {price: 10000},
                {price: 15000}
            ],
            temporal: [
                {temp: 6},
                {temp: 12},
                {temp: 24}
            ],
            viability: 0,
            gain: 0,
            total: 0
        };
        this.handleSelectInvest = this.handleSelectInvest.bind(this);
        this.handleSelectObject = this.handleSelectObject.bind(this);
        this.handleSelectSquad1 = this.handleSelectSquad1.bind(this);
        this.handleSelectSquad2 = this.handleSelectSquad2.bind(this);
        this.handleSelectSquad3 = this.handleSelectSquad3.bind(this);
        this.handleSelectSquad4 = this.handleSelectSquad4.bind(this);
        this.handleSelectSquad5 = this.handleSelectSquad5.bind(this);
        this.handleSelectUsability1 = this.handleSelectUsability1.bind(this);
        this.handleSelectUsability2 = this.handleSelectUsability2.bind(this);
        this.handleSelectUsability3 = this.handleSelectUsability3.bind(this);
        this.handleSelectUser = this.handleSelectUser.bind(this);
        this.handleSelectModel = this.handleSelectModel.bind(this);
        this.handleSelectTemporal = this.handleSelectTemporal.bind(this);
    }

    componentDidMount() {
        this.calculatePrice()
    }

    start() {
        this.setState({
            isPlaying: true,
            isSubmitted: false
        });
    }

    end() {
        this.setState({
            isPlaying: false,
            isSubmitted: true
        });
    }

    handleSelectObject(selectedIndex, e) {
        console.log('handleSelectObject');
        this.setState({
            indexObject: selectedIndex,
            directionObject: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectInvest(selectedIndex, e) {
        console.log('handleSelectInvest');
        this.setState({
            indexInvest: selectedIndex,
            directionInvest: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectSquad1(selectedIndex, e) {
        console.log('handleSelectSquad1');
        this.setState({
            indexSquad1: selectedIndex,
            directionSquad1: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectSquad2(selectedIndex, e) {
        console.log('handleSelectSquad2');
        this.setState({
            indexSquad2: selectedIndex,
            directionSquad2: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectSquad3(selectedIndex, e) {
        console.log('handleSelectSquad3');
        this.setState({
            indexSquad3: selectedIndex,
            directionSquad3: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectSquad4(selectedIndex, e) {
        console.log('handleSelectSquad4');
        this.setState({
            indexSquad4: selectedIndex,
            directionSquad4: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectSquad5(selectedIndex, e) {
        console.log('handleSelectSquad5');
        this.setState({
            indexSquad5: selectedIndex,
            directionSquad5: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectUsability1(selectedIndex, e) {
        console.log('handleSelectUsability1');
        this.setState({
            indexUsability1: selectedIndex,
            directionUsability1: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectUsability2(selectedIndex, e) {
        console.log('handleSelectUsability2');
        this.setState({
            indexUsability2: selectedIndex,
            directionUsability2: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectUsability3(selectedIndex, e) {
        console.log('handleSelectUsability3');
        this.setState({
            indexUsability3: selectedIndex,
            directionUsability3: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectUser(selectedIndex, e) {
        console.log('handleSelectUser');
        this.setState({
            indexUser: selectedIndex,
            directionUser: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectModel(selectedIndex, e) {
        console.log('handleSelectModel');
        this.setState({
            indexModel: selectedIndex,
            directionModel: e.direction,
        }, () => this.calculatePrice());
    }

    handleSelectTemporal(selectedIndex, e) {
        console.log('handleSelectTemporal');
        this.setState({
            indexTemporal: selectedIndex,
            directionTemporal: e.direction,
        }, () => this.calculatePrice());
    }

    addMember() {
        this.setState({
            members: this.state.members + 1
        }, () => this.calculatePrice());
    }

    addStudy() {
        this.setState({
            studies: this.state.studies + 1
        }, () => this.calculatePrice());
    }

    calculateViability() {
        this.end();
        let invest = 0;
        let user = 0;
        let model = 0;
        let time = 0;
        let team = 0;
        let usability = 0;
        switch (this.state.indexObject) {
            case 0:
                console.log('calculateViability2');
                switch (this.state.indexInvest) {
                    case 0:
                        console.log('calculateViability3');
                        invest = 1;
                }
                switch (this.state.indexUser) {
                    case 0:
                        user = 1;
                        break;
                    case 1:
                        user = 0.8;
                        break;
                }
                switch (this.state.indexModel) {
                    case 3:
                        model = 1;
                        break;
                    case 4:
                        model = 0.8;
                        break;
                }
                switch (this.state.indexTemporal) {
                    case 2:
                        time = 1;
                        break;
                }
                let Squad = [this.state.indexSquad1, this.state.indexSquad2, this.state.indexSquad3, this.state.indexSquad4, this.state.indexSquad5];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Squad[i - 1]) {
                        case 0:
                            team = team + 0.5;
                            break;
                        case 5:
                            team = team + 0.5;
                            break
                    }
                }
                if (team > 1) {
                    team = 1;
                }
                let Usability = [this.state.indexUsability1, this.state.indexUsability2, this.state.indexUsability3];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Usability[i - 1]) {
                        case 0:
                            usability = usability + 0.2;
                            break;
                        case 1:
                            usability = usability + 1;
                            break;
                        case 2:
                            usability = usability + 0.2;
                            break;

                    }
                }
                if (usability > 1) {
                    usability = 1;
                }
                console.log('Viabilité : ' + invest * user * usability * model * team * time);
                let viability = invest * user * usability * model * team * time;
                this.setState({
                    viability: viability
                });
                break;
            case 1:
                console.log('calculateViability2');
                switch (this.state.indexInvest) {
                    case 0:
                        console.log('calculateViability3');
                        invest = 0.7;
                        break;
                    case 1:
                        invest = 1;
                        break;
                    case 2:
                        invest = 0.2;
                        break;
                }
                switch (this.state.indexUser) {
                    case 0:
                        user = 0.3;
                        break;
                    case 4:
                        user = 1;
                        break;
                }
                switch (this.state.indexModel) {
                    case 4:
                        model = 1;
                        break;
                    case 1:
                        model = 0.3;
                        break;
                }
                switch (this.state.indexTemporal) {
                    case 1:
                        time = 1;
                        break;
                    case 2:
                        time = 1;
                        break;
                }
                Squad = [this.state.indexSquad1, this.state.indexSquad2, this.state.indexSquad3, this.state.indexSquad4, this.state.indexSquad5];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Squad[i - 1]) {
                        case 0:
                            team = team + 0.3;
                            break;
                        case 1:
                            team = team + 0.5;
                            break;
                        case 2:
                            team = team + 0.1;
                            break;
                        case 4:
                            team = team + 0.1;
                            break;
                        case 5:
                            team = team + 0.1;
                            break
                    }
                }
                if (team > 1) {
                    team = 1;
                }
                Usability = [this.state.indexUsability1, this.state.indexUsability2, this.state.indexUsability3];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Usability[i - 1]) {
                        case 0:
                            usability = usability + 0.3;
                            break;
                        case 1:
                            usability = usability + 0.8;
                            break;
                        case 2:
                            usability = usability + 1;
                            break;

                    }
                }
                if (usability > 1) {
                    usability = 1;
                }
                this.setState({
                    viability: viability
                });
                break;
            case 2:
                console.log('calculateViability2');
                switch (this.state.indexInvest) {
                    case 0:
                        console.log('calculateViability3');
                        invest = 1;
                }
                switch (this.state.indexUser) {
                    case 1:
                        user = 1;
                        break;

                }
                switch (this.state.indexModel) {
                    case 3:
                        model = 1;
                        break;

                }
                switch (this.state.indexTemporal) {
                    case 2:
                        time = 1;
                        break;
                }
                Squad = [this.state.indexSquad1, this.state.indexSquad2, this.state.indexSquad3, this.state.indexSquad4, this.state.indexSquad5];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Squad[i - 1]) {
                        case 1:
                            team = team + 0.5;
                            break;
                        case 5:
                            team = team + 0.5;
                            break
                    }
                }
                if (team > 1) {
                    team = 1;
                }
                Usability = [this.state.indexUsability1, this.state.indexUsability2, this.state.indexUsability3];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Usability[i - 1]) {
                        case 1:
                            usability = usability + 0.3;
                            break;
                        case 2:
                            usability = usability + 1;
                            break;

                    }
                }
                if (usability > 1) {
                    usability = 1;
                }
                this.setState({
                    viability: viability
                });
                break;
            case 3:
                console.log('calculateViability2');
                invest = 1;
                switch (this.state.indexUser) {
                    case 0:
                        user = 1;
                        break;
                    case 3:
                        user = 0.8;
                        break;
                }
                switch (this.state.indexModel) {
                    case 1:
                        model = 1;
                        break;
                    case 2:
                        model = 0.4;
                        break;
                }
                switch (this.state.indexTemporal) {
                    case 0:
                        time = 0.8;
                        break;
                    case 1:
                        time = 1;
                        break;
                    case 2:
                        time = 0.2;
                        break;
                }
                Squad = [this.state.indexSquad1, this.state.indexSquad2, this.state.indexSquad3, this.state.indexSquad4, this.state.indexSquad5];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Squad[i - 1]) {
                        case 2:
                            team = team + 0.3;
                            break;
                        case 4:
                            team = team + 0.3;
                            break;
                        case 5:
                            team = team + 0.4;
                            break
                    }
                }
                if (team > 1) {
                    team = 1;
                }
                Usability = [this.state.indexUsability1, this.state.indexUsability2, this.state.indexUsability3];
                for (let i = 1; i <= this.state.members; i++) {
                    switch (Usability[i - 1]) {
                        case 0:
                            usability = usability + 1;
                            break;
                        case 1:
                            usability = usability + 0.5;
                            break;
                        case 2:
                            usability = usability + 0.2;
                            break;

                    }
                }
                if (usability > 1) {
                    usability = 1;
                }
                this.setState({
                    viability: viability
                });
                break;
        }
    }

    calculatePrice() {
        let invest = this.state.priceInvest[this.state.indexInvest].price;
        let squad1 = this.state.priceSquad[this.state.indexSquad1].price;
        let squad2 = 0;
        let squad3 = 0;
        let squad4 = 0;
        let squad5 = 0;
        if (this.state.members > 1) {
            if (this.state.members > 2) {
                if (this.state.members > 3) {
                    if (this.state.members > 4) {
                        squad2 = this.state.priceSquad[this.state.indexSquad2].price;
                        squad3 = this.state.priceSquad[this.state.indexSquad3].price;
                        squad4 = this.state.priceSquad[this.state.indexSquad4].price;
                        squad5 = this.state.priceSquad[this.state.indexSquad5].price;
                    } else {
                        squad2 = this.state.priceSquad[this.state.indexSquad2].price;
                        squad3 = this.state.priceSquad[this.state.indexSquad3].price;
                        squad4 = this.state.priceSquad[this.state.indexSquad4].price;
                    }
                } else {
                    squad2 = this.state.priceSquad[this.state.indexSquad2].price;
                    squad3 = this.state.priceSquad[this.state.indexSquad3].price;
                }
            } else {
                squad2 = this.state.priceSquad[this.state.indexSquad2].price;
            }
        }
        let temporal = this.state.temporal[this.state.indexTemporal].temp;
        let utility1 = this.state.priceUsability[this.state.indexUsability1].price;
        let utility2 = 0;
        let utility3 = 0;
        if (this.state.studies > 1) {
            if (this.state.studies > 2) {
                utility2 = this.state.priceUsability[this.state.indexUsability2].price;
                utility3 = this.state.priceUsability[this.state.indexUsability3].price
            } else {
                utility2 = this.state.priceUsability[this.state.indexUsability2].price
            }
        }
        let user = this.state.priceUser[this.state.indexUser].price;
        let model = this.state.priceModel[this.state.indexModel].price;
        let gain = this.state.priceGain[this.state.indexObject].price;
        let total = invest - squad1 * temporal - squad2 * temporal - squad3 * temporal - squad4 * temporal - squad5 * temporal - utility1 - utility2 - utility3 - user - model
        this.setState({
            total: total,
            gain: gain
        })
    }

    render() {
        return (
            <Container>
                <br/>
                {this.state.isPlaying === false
                    ? this.state.isSubmitted === true
                        ? <Container style={{height: '100vh', minHeight: '100vh'}}>
                            <Col md={{span: 8, offset: 2}}>
                                {this.state.viability > 0.2
                                    ? this.state.total + this.state.gain > 0
                                        ? <Card>
                                            <Card.Header>Votre projet est viable, et rentable !
                                            </Card.Header>
                                            <Card.Body>
                                                Félicitations, n'hésitez pas tester à nouveau le jeu pour vous
                                                entrainer à
                                                challenger un projet !
                                            </Card.Body>
                                        </Card>
                                        : <Card>
                                            <Card.Header>Votre projet n'est pas rentable.
                                            </Card.Header>
                                            <Card.Body>
                                                Votre rentabilité est négative. Vous devriez rententer l'expérience
                                                en tentant de diminuer vos coûts.
                                            </Card.Body>
                                        </Card>
                                    : <Card>
                                        <Card.Header>Votre projet n'est pas viable.
                                        </Card.Header>
                                        <Card.Body>
                                            Vous avez choisi un certain nombre, d'éléments qui ne sont soit pas
                                            compatibles ou ne sont pas cohérents avec votre projet.
                                            Retentez l'expérience !
                                        </Card.Body>
                                    </Card>
                                }
                                <br/>
                                <Button variant="outline-light" onClick={this.start.bind(this)} block>Start
                                    Game</Button>
                            </Col>
                        </Container>
                        : <Container style={{height: '100vh', minHeight: '100vh'}}>
                            <Col md={{span: 8, offset: 2}}>
                                <Card>
                                    <Card.Body>Bonjour, vous allez ici découvrir les modalités du challenge de projets
                                        innovants. Le challenge de projet innovant est une composante importante de
                                        notre
                                        formation, vous n'en avez pas forcément conscience mais à chaque instant dans
                                        les
                                        projets importants, les professeurs nous testent et testent la robustesse de ces
                                        projets
                                        ainsi que leurs potentiels finalités. Dans le cadre d'une approche plus complète
                                        nous allons vous donner les clés pour évaluer un projet non pas étudiant cette
                                        fois,
                                        mais un véritable projet d'entreprise ou de recherche. Bienvenue sur RODJER.
                                    </Card.Body>
                                    <Card.Body>
                                        <i>
                                            Didactitiel : Notre jeu est un jeu de gestion de ressource, vous choisissez
                                            un
                                            projet innovant qu'il faudra mener à bien, en choisissant un moyen de
                                            financement
                                            adapté, en choisissant des collaborateurs performants, en diligentant des
                                            études
                                            permettant de déterminer la viabilité du produit, en choisissant une
                                            temporalité
                                            idéale, une population cible cohérente avec le projet ainsi qu'un modèle
                                            économique
                                            cohérent. Faites cependant attention à bien répartir vos finances pour
                                            permettre
                                            à
                                            votre projet d'être rentable et viable en fonction des gains annuels qu'il
                                            est
                                            capable de vous apporter. Bonne chance !</i></Card.Body>
                                </Card>
                                <br/>
                                <Button variant="outline-light" onClick={this.start.bind(this)} block>Start
                                    Game</Button>
                            </Col>
                        </Container>
                    : <Container>
                        <ObjectCarousel activeIndex={this.state.indexObject} direction={this.state.directionObject}
                                        onSelect={this.handleSelectObject}/>
                        <InvestCarousel activeIndex={this.state.indexInvest} direction={this.state.directionInvest}
                                        onSelect={this.handleSelectInvest}/>
                        <SquadCarousel activeIndex={this.state.indexSquad1} direction={this.state.directionSquad1}
                                       onSelect={this.handleSelectSquad1}/>
                        {this.state.members === 2 &&
                        <SquadCarousel activeIndex={this.state.indexSquad2} direction={this.state.directionSquad2}
                                       onSelect={this.handleSelectSquad2}/>}
                        {this.state.members === 3 &&
                        <div><SquadCarousel activeIndex={this.state.indexSquad2} direction={this.state.directionSquad2}
                                            onSelect={this.handleSelectSquad2}/><SquadCarousel
                            activeIndex={this.state.indexSquad3} direction={this.state.directionSquad3}
                            onSelect={this.handleSelectSquad3}/></div>}
                        {this.state.members === 4 &&
                        <div><SquadCarousel activeIndex={this.state.indexSquad2} direction={this.state.directionSquad2}
                                            onSelect={this.handleSelectSquad2}/><SquadCarousel
                            activeIndex={this.state.indexSquad3} direction={this.state.directionSquad3}
                            onSelect={this.handleSelectSquad3}/><SquadCarousel activeIndex={this.state.indexSquad4}
                                                                               direction={this.state.directionSquad4}
                                                                               onSelect={this.handleSelectSquad4}/>
                        </div>}
                        {this.state.members === 5 &&
                        <div><SquadCarousel activeIndex={this.state.indexSquad2} direction={this.state.directionSquad2}
                                            onSelect={this.handleSelectSquad2}/><SquadCarousel
                            activeIndex={this.state.indexSquad3} direction={this.state.directionSquad3}
                            onSelect={this.handleSelectSquad3}/><SquadCarousel activeIndex={this.state.indexSquad4}
                                                                               direction={this.state.directionSquad4}
                                                                               onSelect={this.handleSelectSquad4}/><SquadCarousel
                            activeIndex={this.state.indexSquad5} direction={this.state.directionSquad5}
                            onSelect={this.handleSelectSquad5}/></div>}
                        {this.state.members !== 5 && <Col md={{span: 8, offset: 2}}>
                            <Button variant="outline-light" size="lg" block onClick={this.addMember.bind(this)}>
                                + Ajouter un membre à l'équipe
                            </Button>
                        </Col>}
                        <br/>
                        <UsabilityCarousel activeIndex={this.state.indexUsability1}
                                           direction={this.state.directionUsability1}
                                           onSelect={this.handleSelectUsability1}/>
                        {this.state.studies === 2 && <UsabilityCarousel activeIndex={this.state.indexUsability2}
                                                                        direction={this.state.directionUsability2}
                                                                        onSelect={this.handleSelectUsability2}/>}
                        {this.state.studies === 3 && <div><UsabilityCarousel activeIndex={this.state.indexUsability2}
                                                                             direction={this.state.directionUsability2}
                                                                             onSelect={this.handleSelectUsability2}/><UsabilityCarousel
                            activeIndex={this.state.indexUsability3}
                            direction={this.state.directionUsability3}
                            onSelect={this.handleSelectUsability3}/></div>}
                        {this.state.studies !== 3 && <Col md={{span: 8, offset: 2}}>
                            <Button variant="outline-light" size="lg" block onClick={this.addStudy.bind(this)}>
                                + Ajouter une étude d'utilisabilité
                            </Button>
                        </Col>}
                        <br/>
                        <UserCarousel activeIndex={this.state.indexUser}
                                      direction={this.state.directionUser}
                                      onSelect={this.handleSelectUser}/>
                        <ModelCarousel activeIndex={this.state.indexModel}
                                       direction={this.state.directionModel}
                                       onSelect={this.handleSelectModel}/>
                        <TemporalCarousel activeIndex={this.state.indexTemporal}
                                          direction={this.state.directionTemporal}
                                          onSelect={this.handleSelectTemporal}/>
                        <Col md={{span: 8, offset: 2}}>
                            {this.state.total < 0
                                ? <div>
                                    <h1>
                                        <Badge variant="danger">{this.state.total} €</Badge> <span
                                        style={{color: 'white'}}>+</span> <Badge
                                        variant="secondary">{this.state.gain} € *</Badge>
                                    </h1>
                                </div>
                                : <div>
                                    <h1>
                                        <Badge variant="success">{this.state.total} €</Badge> <span
                                        style={{color: 'white'}}>+</span> <Badge
                                        variant="secondary">{this.state.gain} € *</Badge>
                                    </h1>
                                </div>}
                            <Button variant="danger" size="lg" block onClick={this.calculateViability.bind(this)}>
                                Valider le projet
                            </Button>
                            <br/>
                            <span style={{color: 'white'}}>* Si projet viable</span>
                        </Col>
                        <br/>
                    </Container>
                }
            </Container>
        )
    }
}
