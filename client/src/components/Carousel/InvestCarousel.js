import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class InvestCarousel extends React.Component {
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
                                    <Card.Header>Type d'investisseur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Banque</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="success">
                                                    + 200 000 €
                                                </Badge>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="warning">
                                                    Taux annuel 20%
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            La banque est un investisseur loyal, son investissement est toujours
                                            inférieur à
                                            la
                                            demande réelle, de plus les intérêts pour des prêts bancaires entreprises
                                            sont
                                            toujours importants.
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
                                    <Card.Header>Type d'investisseur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Fond d'investissement</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="success">
                                                    + 350 000 €
                                                </Badge>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="danger">
                                                    Prise de capital 40%
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Les fonds d'investissement et les business angels sont un bon moyen
                                            d'obtenir
                                            beaucoup
                                            d'argent qui permet souvent d'aller au bout de son projet à court terme mais
                                            la
                                            prise
                                            de
                                            capital réalisée est alors très importante.
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
                                    <Card.Header>Type d'investisseur</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Love Money</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="success">
                                                    + 100 000 €
                                                </Badge>
                                            </Col>
                                            <Col>
                                                <Badge pill variant="success">
                                                    Taux 0%
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            La love money correspond à l'investissement personnel ainsi que celui de la
                                            famille et
                                            des
                                            amis. Elle est sans aucun retour, on l'appelle l'investissement des trois F
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
            </Carousel>
        );
    }
}
