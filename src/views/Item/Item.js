import React from 'react';
import { Container,Card,Button, Row  } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Item() {
    
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>Producto 1</Card.Title>
                        <Card.Text>
                            Descripción
                        </Card.Text>
                        <Button as={Link} to='/1' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>Producto 2</Card.Title>
                        <Card.Text>
                            Descripción
                        </Card.Text>
                        <Button as={Link} to='/2' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>Producto 3</Card.Title>
                        <Card.Text>
                            Descripción
                        </Card.Text>
                        <Button as={Link} to='/3' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Row>

                <Row className="justify-content-md-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>Producto 4</Card.Title>
                        <Card.Text>
                            Descripción
                        </Card.Text>
                        <Button as={Link} to='/4' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>Producto 5</Card.Title>
                        <Card.Text>
                            Descripción
                        </Card.Text>
                        <Button as={Link} to='/5' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>Producto 6</Card.Title>
                        <Card.Text>
                            Descripción
                        </Card.Text>
                        <Button as={Link} to='/6' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>
        </>
    )
}
