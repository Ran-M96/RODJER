import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class UserCarousel extends React.Component {
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
                                    <Card.Header>Type d'utilisateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Population générale</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 40 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Développer un produit pour la population générale est difficle et les
                                            autorisations sont longues à obtenir surtout s'il s'agit d'un projet de bien
                                            public.
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
                                    <Card.Header>Type d'utilisateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Services publiques</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 55 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            La mise en place d'un dispositif pour les services publiques est longue et
                                            compliquée mais les gains potentiels sont substantiels.
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
                                    <Card.Header>Type d'utilisateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>CSP : enfants et nourissons</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 30 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette catégories est l'une des catégories les plus difficiles à
                                            cibler, en effet l'achat n'est pas effectué par la catégorie mais par leurs
                                            parents.
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
                                    <Card.Header>Type d'utilisateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>CSP : manager</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 10 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette catégorie d'utilisateur est assez facile à cibler, elle nécéssite
                                            néanmoins des approches de design particulières.
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
                                    <Card.Header>Type d'utilisateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>CSP : retraités</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    - 15 000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette catégorie d'utilisateur est assez difficile à cibler, elle nécéssite
                                            des approches d'utilité et d'utilisabilité particulière.
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
