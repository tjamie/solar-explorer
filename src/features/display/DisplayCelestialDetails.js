import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { selectCelestialById } from '../celestials/celestialsSlice';
import '../../styles.css';


const DisplayCelestialDetails = ({ celestialId }) => {
    const celestial = useSelector(selectCelestialById(celestialId));

    const { distanceToParent: d } = celestial;

    return (
        <Card className='solar-info'>
            <CardBody className='solar-info'>
                <CardTitle>{celestial.name}</CardTitle>
                {celestial.subtype
                    ? <CardSubtitle>{celestial.subtype}</CardSubtitle>
                    : <CardSubtitle>{celestial.type}</CardSubtitle>
                }
                <Row>
                    <Col sm='6' className='my-auto'>
                        <CardText>
                            Distance to {d.parent}: {d.val} {d.unit}<br />
                            Mass: {celestial.mass} <br />
                            Diameter: {celestial.diameter}<br />
                            Gravity: {celestial.gravity} m/s<sup>2</sup><br />
                            Surface Pressure: {celestial.surfPressure} kPa
                        </CardText>
                    </Col>
                    <Col sm='6'>
                        <CardText>
                            <i>{celestial.description}</i>
                        </CardText>
                    </Col>
                </Row>


            </CardBody>
        </Card>
    )
}

export default DisplayCelestialDetails;

// {
//     id: 0,
//     parentId: null,
//     name: "sol",
//     image: "placeholder",
//     type: "placeholder (star/planet/dwarf planet/asteroid/moon/etc)",
//     subtype: "placeholder (spectral class/terrestrial/gas/etc)",
//     distanceToParent: ["units", "val"]
//     mass: "placeholder",
//     diameter: "placeholder",
//     gravity: "placeholder",
//     meanTemp: "placeholder (deg C)",
//     surfPressure: "placeholder (kPa)",
//     rotPeriod: "placeholder (sidereal) (earth days)",
//     orbitPeriod: "placeholder (relative to parent)",
//     eccentricity: "placeholder",
//     description: "placeholder"
// }