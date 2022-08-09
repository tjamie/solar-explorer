import { Container, Col, Row } from 'reactstrap';
import { useState } from 'react';
import CelestialsSidebar from '../features/celestials/CelestialsSidebar';
import DisplayCelestialDetails from '../features/display/DisplayCelestialDetails';

const ExplorePage = () => {

    const [celestialId, setCelestialId] = useState(0);
    // const wrapperSetCelestialId = useCallback((val) => {
    //     setCelestialId(val);
    // }, [setCelestialId]);

    return (
        <Container fluid>
            <Row>
                <Col sm='10'>
                    <DisplayCelestialDetails celestialId={celestialId} />
                </Col>
                <Col sm='2'>
                    {/* <CelestialsList setCelestialId={setCelestialId} /> */}
                    <CelestialsSidebar setCelestialId={setCelestialId} />
                    {/* <CelestialsSidebar /> */}
                </Col>
            </Row>
        </Container>
    );
}

export default ExplorePage;