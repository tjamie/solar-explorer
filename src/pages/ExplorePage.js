import { Container, Col, Row } from 'reactstrap';
import { useState } from 'react';
import CelestialsSidebar from '../features/celestials/CelestialsSidebar';
import DisplayCelestialDetails from '../features/display/DisplayCelestialDetails';
import DisplayCelestialModel from '../features/display/DisplayCelestialModel';
import '../styles.css';

const ExplorePage = () => {

    const [celestialId, setCelestialId] = useState(0);

    return (
        <Container fluid style={{ paddingTop: '10px' }}>
            <Row>
                <Col sm='10' >
                    <DisplayCelestialDetails celestialId={celestialId} />
                    <DisplayCelestialModel celestialId={celestialId} />
                </Col>
                <Col sm='2'>
                    <CelestialsSidebar setCelestialId={setCelestialId} />
                </Col>
            </Row>
        </Container >
    );
}

export default ExplorePage;