import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class ModelCarousel extends React.Component {
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
                                    <Card.Header>Modèle économique</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Abonnement freemium</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 20 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Catégorie en pleine expansion, permettant de faire découvrir l'application
                                            gratuitement et d'accéder aux fonctionnalités plus importante de façon
                                            payante. ex : Spotify.
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
                                    <Card.Header>Modèle économique</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Campagne de don</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 10 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Catégorie intéressante pour être indépendant financièrement et éviter
                                            certains modèle considérés comme parasité, mais nécessite un projet de bien
                                            public ayant une grande communauté d'utilisateur pour fonctionner. ex :
                                            Wikipédia.
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
                                    <Card.Header>Modèle économique</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Vente d'espace publicitaire</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 30 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Permet de rentabiliser une application gratuite grâce au financement des
                                            annonceurs. Considéré parfois comme un modèle parasite. Nécessite une grand
                                            nombre d'utilisateur.
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
                                    <Card.Header>Modèle économique</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Commercialisation produit</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 10 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Considéré comme le modèle standard, permettant la vente et la création d'un
                                            produit dans un système capitaliste usuel.
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
                                    <Card.Header>Modèle économique</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Abonnement</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 15 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Catégorie en pleine expansion, permet l'utilisation d'un service contre un
                                            paiement hebdomadaire, mensuel ou annuel. ex : Leasing automobile,
                                            téléphonie.
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
            </Carousel>
        );
    }
}