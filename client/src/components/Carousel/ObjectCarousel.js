import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class ObjectCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            index: this.props.activeIndex,
            direction: this.props.direction,
        };
    }

    render() {
        return (
            <Carousel interval={null} activeIndex={this.props.activeIndex} direction={this.props.direction}
                onSelect={this.props.onSelect}>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Projet</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Interface cerveau-ordinateur pour la surveillance de réveil en
                                            anesthésie générale</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <i>Projet innovant de recherche</i>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    Gain annuel si projet viable 150 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette interface est très prometteuse pour la surveillance des patients
                                            malgré la réticence du corps médical et notamment des anesthésistes à
                                            l'utiliser.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Projet</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Apprentissage fédéré pour l'acquisiton de motifs de marche avec
                                            semelles connectés sur une application dédiée</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <i>Projet d'innovation privé</i>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    Gain annuel si projet viable 250 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Ce système permet d'apprendre les motifs de mouvements réalisés sur des
                                            objets connectés utilisés par l'utilisateur, selon certaines études cela
                                            permettrait de prévenir en amont le patient d'une possible pathologie sénile
                                            comme alzheimer ou parkinson.
                                        </Card.Text>
                                        <br/>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Projet</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Détections de mines terrestre grâce à l'apprentissage profond sur
                                            des données issues d'un Lidar sur les terrains de guerre</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <i>Projet d'innovation public</i>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    Gain annuel si projet viable 100 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Ce projet permettrait de déterminer les zones qui ont étés minés pendants
                                            les conflits avec précision et d'en dresser une carte détaillée.
                                        </Card.Text>
                                        <br/>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Projet</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Application permettant la publication et la correction par des pairs
                                            d'article scientifique de façon anonyme mais contrôlé
                                            informatiquement</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <i>Projet d'innovation privée</i>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    Gain annuel si projet viable 90 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Ce projet permettrait de se passer des éditeurs scientifiques qui vendent
                                            les articles scientifiques ceci dans le but de permettre une gratuité
                                            d'accès à la recherche.
                                        </Card.Text>
                                        <br/>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
            </Carousel>
        );
    }
}