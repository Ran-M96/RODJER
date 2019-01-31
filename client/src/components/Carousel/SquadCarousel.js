import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class SquadCarousel extends React.Component {
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
                                    <Card.Header>Collaborateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Ingénieur</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Salaire mensuel 3000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Expert des sciences dure, l'ingénieur à une vision très spécialisé du projet
                                            et est un atout obligatoire pour l'ensemble des projets scientifiques
                                            publique ou privés.
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
                                    <Card.Header>Collaborateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Ingénieur confirmé</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Salaire mensuel 7000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Expert des sciences dure, l'ingénieur à une vision très spécialisé du
                                            projet. L'ingénieur confirmé est plus cher que l'ingénieur, mais son
                                            expertise est indispensable dans les projets d'envergure à haute valeur
                                            technologique.
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
                                    <Card.Header>Collaborateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Designer-ergonome</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Salaire mensuel 4000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            La love money correspond à l'investissement personnel ainsi que de la
                                            famille et
                                            des
                                            amis. Elle est sans aucun retours, on l'appelle l'investissement des trois F
                                            :
                                            Family,
                                            Friends and Fools.
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
                                    <Card.Header>Collaborateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Comptable</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Salaire mensuel 1500 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Personnalité permettant une gestion pertinente des comptes et des finances
                                            de l'entreprise.
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
                                    <Card.Header>Collaborateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Développeur front-end</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Salaire mensuel 3000 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Personnalité expert dans la création de l'interface utilisateur elle-même,
                                            indispensable à tout projet d'application.
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
                                    <Card.Header>Collaborateur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Développeur back-end</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Salaire mensuel 3500 €
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Personnalité expert dans la création d'applications, de systèmes embarqués,
                                            des réseaux et d'algorithmes.
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