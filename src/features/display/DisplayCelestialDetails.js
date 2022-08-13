import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { selectCelestialById } from '../celestials/celestialsSlice';
import { convertScientificNotation } from '../../utils/convertScientificNotation';
import { capitalize } from '../../utils/capitalize';
import '../../styles.css';


const DisplayCelestialDetails = ({ celestialId }) => {
    const celestial = useSelector(selectCelestialById(celestialId));

    const { distanceToParent: d } = celestial;

    return (
        <Card className='solar-info'>
            <CardBody className='solar-info'>
                <CardTitle>{capitalize(celestial.name)}</CardTitle>
                {celestial.subtype
                    ? <CardSubtitle>{capitalize(celestial.subtype)}</CardSubtitle>
                    : <CardSubtitle>{capitalize(celestial.type)}</CardSubtitle>
                }
                <Row>
                    <Col sm='6' className='my-auto'>
                        <CardText>
                            Distance to {capitalize(d.parent)}: {convertScientificNotation(d.val)} {d.unit}<br />
                            Mass: {convertScientificNotation(celestial.mass)} kg<br />
                            Diameter: {convertScientificNotation(celestial.diameter)} km <br />
                            Gravity: {celestial.gravity} m/s<sup>2</sup><br />
                            Surface Pressure: {convertScientificNotation(celestial.surfPressure)} kPa
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